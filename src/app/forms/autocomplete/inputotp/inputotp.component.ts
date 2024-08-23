import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { KnobModule } from 'primeng/knob';


@Component({
  selector: 'app-inputotp',
  standalone: true,
  imports: [FormsModule,InputOtpModule],
  templateUrl: './inputotp.component.html',
  styleUrl: './inputotp.component.css'
})
export class InputotpComponent {
 value : any
}
