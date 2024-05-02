import express from 'express';
import { MovieController } from '../controllers/movieController'

const router = express.Router();

router.get('/allmovies', MovieController.getAllMovies);  
router.post('/addNewMovie', MovieController.addNewMovie);  
router.get('/getMovie/:id', MovieController.getMovieById);  
router.put('/updateMovie/:id', MovieController.updateMovie);  
router.delete('/deleteMovie/:id', MovieController.deleteMovie);  

export default router;