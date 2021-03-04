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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
let BooksController = class BooksController {
    constructor(booksServices) {
        this.booksServices = booksServices;
    }
    async addBook(bookBookName, bookImage, bookWritter, bookCategory, bookDescription, bookPrice, bookRating, bookCountInStock, bookNumReviews, bookPages) {
        const generatedId = await this.booksServices.insertBooks(bookBookName, bookImage, bookWritter, bookCategory, bookDescription, bookPrice, bookRating, bookCountInStock, bookNumReviews, bookPages);
        return { id: generatedId };
    }
    async getBooks() {
        const books = await this.booksServices.getBooks();
        return books;
    }
    getSingleBook(bookId) {
        return this.booksServices.getSingleBook(bookId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('bookName')),
    __param(1, common_1.Body('image')),
    __param(2, common_1.Body('writter')),
    __param(3, common_1.Body('category')),
    __param(4, common_1.Body('description')),
    __param(5, common_1.Body('price')),
    __param(6, common_1.Body('rating')),
    __param(7, common_1.Body('countInStock')),
    __param(8, common_1.Body('numReviews')),
    __param(9, common_1.Body('pages')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Number,
        Number,
        Number,
        Number,
        Number]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "addBook", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBooks", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getSingleBook", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map