"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookings = void 0;
const typeorm_1 = require("typeorm");
const movies_1 = require("./movies");
let bookings = class bookings {
};
exports.bookings = bookings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], bookings.prototype, "booking_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], bookings.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], bookings.prototype, "movie_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movies_1.Movie, bkg => bkg.movie_id),
    __metadata("design:type", Array)
], bookings.prototype, "movies", void 0);
exports.bookings = bookings = __decorate([
    (0, typeorm_1.Entity)("bookings")
], bookings);
//# sourceMappingURL=booking.js.map