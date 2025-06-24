import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getGenres() {
    return this.http.get<any[]>(this.baseUrl + 'genres/');
  }

  getLanguages() {
    return this.http.get<any[]>(this.baseUrl + 'language/');
  }

  getCountries() {
    return this.http.get<any[]>(this.baseUrl + 'countries/');
  }

  getIndustries() {
    return this.http.get<any[]>(this.baseUrl + 'industry/');
  }

  addMovie(formData:any) {
    return this.http.post(this.baseUrl + 'movies/', formData);
  }
  getAllMovies() {
    return this.http.get<any[]>(this.baseUrl + 'movies/');
  }
}