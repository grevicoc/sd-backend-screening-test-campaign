import { Movie_actor } from "../models/movie_actor";
import { AppDataSource } from "../data-source";

const movie_actorRepository = AppDataSource.getRepository(Movie_actor);

const createMovie_actor = async (entity: Movie_actor) => {
  await movie_actorRepository.save(entity);
  console.log("movie_actor has been saved");

  const savedMovie_actor = await movie_actorRepository.find();
  console.log("All photos from the db: ", savedMovie_actor);
};

const readMovieactbyID = async (id: number): Promise<Movie_actor> => {
  const movieactID = await movie_actorRepository.findOneBy({
    id: id,
  });
  console.log("First photo from the db: ", movieactID);
  return movieactID;
};

const updateMovieact = async (entity: Movie_actor) => {
  const movieactToUpdate = await movie_actorRepository.findOneBy({
    id: entity.id,
  });
  movieactToUpdate.movie_id = entity.movie_id;
  movieactToUpdate.castid = entity.castid;

  await movie_actorRepository.save(movieactToUpdate);
};

const deleteMovieact = async (id: number) => {
  const movieactToRemove = await movie_actorRepository.findOneBy({
    id: id,
  });
  await movie_actorRepository.remove(movieactToRemove);
};
