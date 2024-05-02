"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const index_1 = require("../index");
const movies_1 = require("../entities/movies");
class MovieController {
    static getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movieRepository = index_1.AppDataSource.getRepository(movies_1.Movie);
                const movies = yield movieRepository.find();
                res.status(200).json({ success: true, movies });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    static addNewMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, release_date, length_minutes } = req.body;
                if (!title || !release_date || !length_minutes) {
                    throw new Error("Missing required properties in request body");
                }
                const movie = new movies_1.Movie();
                movie.title = title;
                movie.release_date = release_date;
                movie.runtime = length_minutes;
                const movieRepository = index_1.AppDataSource.getRepository(movies_1.Movie);
                yield movieRepository.save(movie);
                res.status(201).json({ success: true, message: "New movie added successfully" });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    static getMovieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const movieRepository = index_1.AppDataSource.getRepository(movies_1.Movie);
                const movie = yield movieRepository.findOneBy({
                    movie_id: parseInt(id),
                });
                res.status(201).json({ status: 201, success: true, data: movie });
            }
            catch (error) {
                res.status(500).json({ status: 500, success: false, message: error.message });
            }
        });
    }
    static updateMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { title, release_date, length_minutes } = req.body;
                const movieRepository = index_1.AppDataSource.getRepository(movies_1.Movie);
                const movieToUpdate = yield movieRepository.findOneBy({
                    movie_id: parseInt(id),
                });
                if (!movieToUpdate) {
                    return res.status(404).json({ status: 404, success: false, message: 'Movie not found' });
                }
                if (title)
                    movieToUpdate.title = title;
                if (release_date)
                    movieToUpdate.release_date = release_date;
                if (length_minutes)
                    movieToUpdate.runtime = length_minutes;
                const updatedMovie = yield movieRepository.save(movieToUpdate);
                return res.status(201).json({ status: 201, success: true, data: updatedMovie });
            }
            catch (error) {
                return res.status(500).json({ status: 500, success: false, message: error.message });
            }
        });
    }
    static deleteMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const movieRepository = index_1.AppDataSource.getRepository(movies_1.Movie);
                const movietoremove = yield movieRepository.findOneBy({ movie_id: parseInt(id) });
                if (!movietoremove) {
                    return res.status(404).json({ status: 404, success: false, message: 'Movie not found' });
                }
                yield movieRepository.remove(movietoremove);
                return res.status(201).json({ status: 201, success: true, message: 'Movie deleted' });
            }
            catch (error) {
                return res.status(500).json({ status: 500, success: false, message: error.message });
            }
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movieController.js.map