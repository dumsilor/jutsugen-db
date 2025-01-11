import { Component } from '@angular/core';
import { HorrorComponent } from "./pages/horror/horror.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HorrorComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}
