"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controllers/bookingController");
const router = express_1.default.Router();
router.post('/newbooking/:userId', bookingController_1.Bookings.movieBooking);
router.get('/user/:id', bookingController_1.Bookings.userbookings);
exports.default = router;
//# sourceMappingURL=bookingroutes.js.map