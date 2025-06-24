import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmovie',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.css'
})
export class AddmovieComponent {

  movieForm!: FormGroup;
  genres: any[] = [];
  languages: any[] = [];
  countries: any[] = [];
  industries: any[] = [];
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private movieService: MovieService,private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: [''],
      genres: [[]],
      languages: [[]],
      countries: [[]],
      industries: [[]],
      description: [''],
      release_year: [''],
      image: [null],
    });

    this.loadSelectData();
  }

  loadSelectData() {
    this.movieService.getGenres().subscribe((data) => (this.genres = data));
    this.movieService.getLanguages().subscribe((data) => (this.languages = data));
    this.movieService.getCountries().subscribe((data) => (this.countries = data));
    this.movieService.getIndustries().subscribe((data) => (this.industries = data));
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    Object.keys(this.movieForm.value).forEach((key) => {
      const value = this.movieForm.value[key];
      if (Array.isArray(value)) {
        value.forEach((v: any) => formData.append(`${key}`, v));
      } else {
        formData.append(key, value);
      }
    });

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }
    this.movieService.addMovie(formData).subscribe({
      next: (res) => {
        this.toastr.success('Movie added successfully!');  // ✅ toast instead of alert
    
        // Refresh page by re-navigating to the same route
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/add-movie']);
        });
    
        // Optional: Reset the form
        this.movieForm.reset();
      },
      error: (err) => {
        console.error('Error:', err);
        this.toastr.error('Failed to add movie');
      },
    });
}
}