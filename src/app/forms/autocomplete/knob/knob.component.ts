import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-knob',
  standalone: true,
  imports: [FormsModule, KnobModule, ButtonModule],
  templateUrl: './knob.component.html',
  styleUrl: './knob.component.css'
})
export class KnobComponent {
value: number = 10;
}
