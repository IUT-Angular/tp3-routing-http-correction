import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, DatePipe } from '@angular/common';

import { Book } from '../../models/book.model';
import { BookService } from '../../services/book-service'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, DatePipe, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [];

  constructor(protected bookService: BookService){
  }

  ngOnInit(){
    this.books = this.bookService.getAll();
  }
}
