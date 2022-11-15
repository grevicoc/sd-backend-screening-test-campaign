import { Actor } from "../models/Actor";
import { AppDataSource } from "../data-source";

const actorRepository = AppDataSource.getRepository(Actor);

const createActor = async (entity: Actor) => {
  await actorRepository.save(entity);
  console.log("Actor has been saved");

  const savedActor = await actorRepository.find();
  console.log("All photos from the db: ", savedActor);
};

const readActorbyID = async (id: number): Promise<Actor> => {
  const actorID = await actorRepository.findOneBy({
    castid: id,
  });
  console.log("First photo from the db: ", actorID);
  return actorID;
};

const updateActor = async (entity: Actor) => {
  const actorToUpdate = await actorRepository.findOneBy({
    castid: entity.castid,
  });
  actorToUpdate.castname = entity.castname;
  actorToUpdate.deadday = entity.deadday;
  actorToUpdate.birthday = entity.birthday;
  actorToUpdate.castrating = entity.castrating;

  await actorRepository.save(actorToUpdate);
};

const deleteActor = async (id: number) => {
  const actorToRemove = await actorRepository.findOneBy({
    castid: id,
  });
  await actorRepository.remove(actorToRemove);
};

export {createActor, readActorbyID, updateActor, deleteActor}