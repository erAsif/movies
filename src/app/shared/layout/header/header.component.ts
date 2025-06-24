import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.username || user.userName;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  
    this.router.navigate(['/login']);
  }
}
