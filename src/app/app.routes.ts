import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookHomeComponent } from './components/book-home/book-home.component';

export const routes: Routes = [
    { path: '', component: BookHomeComponent },
    { path: 'books', component: BookListComponent },
    { path: 'book/add', component: BookFormComponent },    
    { path: 'book/:id', component: BookDetailComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
