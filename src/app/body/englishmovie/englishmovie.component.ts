import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-englishmovie',
  imports: [CommonModule],
  templateUrl: './englishmovie.component.html',
  styleUrl: './englishmovie.component.css'
})
export class EnglishmovieComponent  implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => { 
        this.movies = data.filter(movie =>
          movie.languages.some((lang: string) => lang.toLowerCase() === 'english')
        );
        console.log('Filtered movies:', this.movies);
      },
      error: (err) => console.error('Failed to load movies', err)
    });
  }
}