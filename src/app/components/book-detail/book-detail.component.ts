import { Component} from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../models/book';
import { BookService } from '../../services/book-service';

@Component({
  standalone: true,
  selector: 'app-book-detail',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './book-detail.component.html',
  styles: ``
})
export class BookDetailComponent {
  selectedBook!: Book | undefined;

  constructor(protected bookService: BookService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.selectedBook = this.bookService.getBookById(id);
    console.log(this.selectedBook);
  }
}