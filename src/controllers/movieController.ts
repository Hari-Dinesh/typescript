import { Request, Response } from 'express';
import { AppDataSource } from "../index"
import { Movie } from "../entities/movies";

class MovieController {
    static async getAllMovies(req: Request, res: Response) {
        try {
            const movieRepository = AppDataSource.getRepository(Movie)
            const movies = await movieRepository.find();
            res.status(200).json({ success: true, movies });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async addNewMovie(req: Request, res: Response) {
        try {
            const { title, release_date, length_minutes } = req.body;
            
            if (!title || !release_date || !length_minutes) {
                throw new Error("Missing required properties in request body");
            }
    
            const movie = new Movie();
            movie.title = title;
            movie.release_date = release_date;
            movie.runtime = length_minutes;
    
            const movieRepository = AppDataSource.getRepository(Movie);
            await movieRepository.save(movie);//
    
            res.status(201).json({ success: true, message: "New movie added successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    
    static async getMovieById(req :Request, res:Response){
        try {
            const {id}=req.params
           const movieRepository=AppDataSource.getRepository(Movie)
           const movie = await movieRepository.findOneBy({
            movie_id: parseInt(id),
        })
            res.status(201).json({status:201,success:true,data:movie})
        } catch (error) {
            res.status(500).json({status:500,success:false,message:error.message})
        }
    }
    static async updateMovie(req :Request, res:Response){
        try {
            const {id}=req.params
            const {title,release_date,length_minutes}=req.body
            const movieRepository = AppDataSource.getRepository(Movie);
            const movieToUpdate = await movieRepository.findOneBy({
                movie_id: parseInt(id),
            })

            if (!movieToUpdate) {
                return res.status(404).json({ status: 404, success: false, message: 'Movie not found' });
            }

            if(title)movieToUpdate.title = title;
            if(release_date) movieToUpdate.release_date = release_date ;
            if(length_minutes) movieToUpdate.runtime = length_minutes ;

            const updatedMovie = await movieRepository.save(movieToUpdate);
            return res.status(201).json({status:201,success:true,data:updatedMovie})
        } catch (error) {
            return res.status(500).json({status:500,success:false,message:error.message})
        }
    }
    static async deleteMovie(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const movieRepository = AppDataSource.getRepository(Movie);
            const movietoremove = await movieRepository.findOneBy({ movie_id: parseInt(id) });
            if (!movietoremove) {
                return res.status(404).json({ status: 404, success: false, message: 'Movie not found' });
            }
            await movieRepository.remove(movietoremove);
           return res.status(201).json({ status: 201, success: true, message: 'Movie deleted' });
        } catch (error) {
           return res.status(500).json({ status: 500, success: false, message: error.message });
        }
    }
    

    
}

export { MovieController };
