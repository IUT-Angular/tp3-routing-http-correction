import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookService } from './services/book-service';
import { Book } from './models/book';
import { BookMenuComponent } from './components/book-menu/book-menu.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookMenuComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    BookService
  ]
})
export class App {
  protected readonly title = signal('tp2-form-matangular-correction');

  // Injection de dépendance du service BookService
  constructor(protected bookService: BookService){ }

  addBook($event: Book): void {
    this.bookService.addBook($event);
  }

  onActivate(componentRef: Event): void {
    console.log('onActivate', componentRef);

    if(componentRef instanceof BookFormComponent) {
      componentRef.addBookEvent.subscribe((newBook: Book) => {
        this.addBook(newBook);
      });
    }
  }
}
