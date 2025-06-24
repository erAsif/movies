import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-southmovie',
  imports: [CommonModule],
  templateUrl: './southmovie.component.html',
  styleUrl: './southmovie.component.css'
})
export class SouthmovieComponent  implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data.filter(movie =>
          movie.languages.some((lang: string) =>
            ['Tamil', 'Telugu'].includes(lang)
          )
        );
        console.log('Filtered movies:', this.movies);
      },
      error: (err) => console.error('Failed to load movies', err)
    });
  }
}