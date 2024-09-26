import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-book-menu',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatMenuModule],
  templateUrl: './book-menu.component.html',
  styleUrl: './book-menu.component.css'
})
export class BookMenuComponent {

}
