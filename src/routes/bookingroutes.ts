import express from 'express';
import { Bookings } from '../controllers/bookingController';

const router = express.Router();

router.post('/newbooking/:userId', Bookings.movieBooking);  
router.get('/user/:id', Bookings.userbookings)

export default router;