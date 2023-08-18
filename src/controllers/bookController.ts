import express from 'express';
import { BookService } from '../services/bookService';
import { ServiceHandler } from '../serviceHandler';

export function bookController(app: any) {
    app.get('/books', function(req: Request, res: Response) {
        const bookService = new BookService();
        ServiceHandler(req, res, bookService.getAllBooks());
    });
}