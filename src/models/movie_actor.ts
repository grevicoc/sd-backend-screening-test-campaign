import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Movie_actor {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    movie_id: number

    @Column()
    castid: number

}
