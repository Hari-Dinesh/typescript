"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const typeorm_1 = require("typeorm");
const movies_1 = require("./entities/movies");
const booking_1 = require("./entities/booking");
const movieroutes_1 = __importDefault(require("../src/routes/movieroutes"));
const bookingroutes_1 = __importDefault(require("../src/routes/bookingroutes"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "movies",
    entities: [movies_1.Movie, booking_1.bookings],
    synchronize: false,
    logging: false,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("connected to database");
    app.use('/movies', movieroutes_1.default);
    app.use('/booking', bookingroutes_1.default);
    app.listen(5050, () => {
        console.log("5050");
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map