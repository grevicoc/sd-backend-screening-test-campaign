import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    movie_id: number

    @Column()
    movie_name: string

    @Column()
    language: string

    @Column()
    status: string

    @Column()
    movie_rating: number

}