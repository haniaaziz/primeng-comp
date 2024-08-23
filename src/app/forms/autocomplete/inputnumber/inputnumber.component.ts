import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';


@Component({
  selector: 'app-inputnumber',
  standalone: true,
  imports: [FormsModule, InputNumberModule],
  templateUrl: './inputnumber.component.html',
  styleUrl: './inputnumber.component.css'
})
export class InputnumberComponent {
 value: number = 42723;
}
