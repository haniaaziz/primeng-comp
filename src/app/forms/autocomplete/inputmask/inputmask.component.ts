import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-inputmask',
  standalone: true,
  imports: [FormsModule, InputMaskModule,InputSwitchModule],
  templateUrl: './inputmask.component.html',
  styleUrl: './inputmask.component.css'
})
export class InputmaskComponent {
     value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;

     checked: boolean = true;
}
