import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn ,OneToMany} from "typeorm";
import { Movie } from "./movies";

@Entity("bookings")
export class bookings {
    @PrimaryGeneratedColumn()
    booking_id: number;

    @Column()
    user_id: number;


    @Column()
    movie_id: number;

    @ManyToOne(() => Movie, movie => movie.bookings)
    @JoinColumn({ name: "movie_id" })
    movies: Movie;

}
