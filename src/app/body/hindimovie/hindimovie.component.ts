import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hindimovie',
  imports: [CommonModule],
  templateUrl: './hindimovie.component.html',
  styleUrl: './hindimovie.component.css'
})
export class HindimovieComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => { 
        // Case-insensitive match for 'chinese'
        this.movies = data.filter(movie =>
          movie.languages.some((lang: string) => lang.toLowerCase() === 'hindi')
        );
        console.log('Filtered movies:', this.movies);
      },
      error: (err) => console.error('Failed to load movies', err)
    });
  }
}