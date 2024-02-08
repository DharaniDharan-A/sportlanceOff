import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;
  constructor(private route: ActivatedRoute) {}
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
