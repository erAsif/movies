import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent,FooterComponent,SidebarComponent,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
