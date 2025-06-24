import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: res => {
          this.message = res.message;
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));  // ✅ Fix here
          localStorage.setItem('userType', res.userType);          // ✅ Include this if needed
          this.route.navigate(['/home']);
        },
        error: err => this.message = 'Login failed!'
      });
    }
  }

  goToRegister() {
    this.route.navigate(['/register']);
  }

}