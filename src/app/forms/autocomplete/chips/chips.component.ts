import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';


@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [FormsModule, ChipsModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {
      values: string[] | undefined;
      max = 2;
}
