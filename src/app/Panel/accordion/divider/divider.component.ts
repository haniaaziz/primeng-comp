import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter'; 


@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [DividerModule,FieldsetModule, AvatarModule,SplitterModule  ],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {

}
