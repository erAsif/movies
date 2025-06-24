import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  superuser: boolean = false;

  ngOnInit(): void {
    const userType = localStorage.getItem('userType');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.superuser = userType === 'django' && user.is_superuser === true  ;
  }
}
