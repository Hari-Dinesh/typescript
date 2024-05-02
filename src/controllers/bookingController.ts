import { bookings } from "../entities/booking";
import { Movie } from "../entities/movies";
import { Request,Response } from "express";
import { AppDataSource } from "../index"

class Bookings{
    static async movieBooking(req: Request, res: Response){
        try {
            const {userId}=req.params
            const {movie_id}=req.body
            const booking=new bookings()
            booking.user_id=parseInt(userId)
            booking.movie_id=movie_id

            const bookingRepository = AppDataSource.getRepository(bookings);
            await bookingRepository.save(booking);
            res.send("booking sucessful")


        } catch (error) {
            console.log(error)
            res.send("error in the movie bokking")
        }
    }
    static async userbookings(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const movieRepository = AppDataSource.getRepository(Movie);
            const movieWithBookings = await movieRepository.findOne({
                where: { movie_id: parseInt(id) },
                relations: ["bookings"]
            });
            return res.status(200).json({ status: 200, success: true, data: movieWithBookings });
        } catch (error) {
            console.error('Error in userbookings:', error);
            return res.status(500).json({ status: 500, success: false, message: 'Internal server error' });
        }
    }
}
export {Bookings}