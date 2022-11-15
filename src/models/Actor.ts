import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Actor {

    @PrimaryGeneratedColumn()
    castid: number

    @Column()
    castname: string

    @Column()
    birthday: Date

    @Column()
    deadday: Date

    @Column()
    castrating: number

}