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
exports.Bookings = void 0;
const booking_1 = require("../entities/booking");
const index_1 = require("../index");
class Bookings {
    static movieBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const { movie_id } = req.body;
                const booking = new booking_1.bookings();
                booking.user_id = parseInt(userId);
                booking.movie_id = movie_id;
                const bookingRepository = index_1.AppDataSource.getRepository(booking_1.bookings);
                yield bookingRepository.save(booking);
                res.send("booking sucessful");
            }
            catch (error) {
                console.log(error);
                res.send("error in the movie bokking");
            }
        });
    }
    static userbookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const movieRepository = index_1.AppDataSource.getRepository(booking_1.bookings);
                const movieWithBookings = yield movieRepository.findOne({
                    where: { user_id: parseInt(id) },
                    relations: ["movies"]
                });
                return res.status(200).json({ status: 200, success: true, data: movieWithBookings });
            }
            catch (error) {
                console.error('Error in userbookings:', error);
                return res.status(500).json({ status: 500, success: false, message: 'Internal server error' });
            }
        });
    }
}
exports.Bookings = Bookings;
//# sourceMappingURL=bookingController.js.map