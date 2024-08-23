import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-tabview',
  standalone: true,
  imports: [TabViewModule, BadgeModule, AvatarModule],
  templateUrl: './tabview.component.html',
  styleUrl: './tabview.component.css'
})
export class TabviewComponent {

}
