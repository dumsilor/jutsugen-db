import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horror',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './horror.component.html',
  styleUrl: './horror.component.scss'
})
export class HorrorComponent implements OnInit{
  horrorMovies!:any[];
  linkInput!: string;

  constructor(private moviesService: MoviesService) {}
 
  ngOnInit(): void {
    this.horrorMovies = this.moviesService.horror_movies_link;
  }

  addLink(){
    this.horrorMovies.push({link: this.linkInput});
    this.linkInput = '';
  }
}
