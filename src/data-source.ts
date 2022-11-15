import "reflect-metadata";
import { DataSource } from "typeorm";
import { Actor } from "./models/Actor";
import { Movie } from "./models/Movie";
import { Movie_actor } from "./models/movie_actor";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USERNAME,
  synchronize: true,
  logging: false,
  entities: [Movie_actor, Movie, Actor],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
