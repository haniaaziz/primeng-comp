import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';


@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css',
      providers: [MessageService]

})
export class ProgressbarComponent {

}
