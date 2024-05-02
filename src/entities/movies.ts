import { Entity, Column, PrimaryGeneratedColumn, OneToMany ,ManyToOne} from "typeorm";
import { bookings } from "./booking";

@Entity("movies")
export class Movie {
    @PrimaryGeneratedColumn()
    movie_id: number;

    @Column()
    title: string;

    @Column()
    release_date: Date;

    @Column()
    runtime: number;

    @OneToMany(() => bookings, bkg => bkg.movies)
    bookings: bookings;
    
}
