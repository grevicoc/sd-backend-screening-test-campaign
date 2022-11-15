import { Movie } from "../models/Movie";
import { AppDataSource } from "../data-source";

const movieRepository = AppDataSource.getRepository(Movie);

const createMovie = async (entity: Movie) => {
  await movieRepository.save(entity);
  console.log("Movie has been saved");

  const savedMovie = await movieRepository.find();
  console.log("All photos from the db: ", savedMovie);
};

const readMoviebyID = async (id: number): Promise<Movie> => {
  const movieID = await movieRepository.findOneBy({
    movie_id: id,
  });
  console.log("First photo from the db: ", movieID);
  return movieID;
};

const updateMovie = async (entity: Movie) => {
  const movieToUpdate = await movieRepository.findOneBy({
    movie_id: entity.movie_id,
  });
  movieToUpdate.movie_name = entity.movie_name;
  movieToUpdate.language = entity.language;
  movieToUpdate.status = entity.status;
  movieToUpdate.movie_rating = entity.movie_rating;

  await movieRepository.save(movieToUpdate);
};

const deleteMovie = async (id: number) => {
  const movieToRemove = await movieRepository.findOneBy({
    movie_id: id,
  });
  await movieRepository.remove(movieToRemove);
};

export {createMovie, updateMovie, readMoviebyID, deleteMovie};
