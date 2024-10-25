import { Component } from '@angular/core';
import { sideBar, TSidebar } from '../../../const';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IconButtonDirective } from '../icon-button.directive';
import { Router, RouterModule } from '@angular/router';
import { IsAuthService } from '../../service/is-auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, CommonModule, IconButtonDirective, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sideBar: TSidebar[] = sideBar;
  constructor(private auth: IsAuthService, private route: Router) {}
  logout() {
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
