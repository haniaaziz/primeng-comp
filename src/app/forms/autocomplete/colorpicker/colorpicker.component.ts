import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';


@Component({
  selector: 'app-colorpicker',
  standalone: true,
  imports: [FormsModule, ColorPickerModule],
  templateUrl: './colorpicker.component.html',
  styleUrl: './colorpicker.component.css'
})
export class ColorpickerComponent {
          color: string = '#6466f1';

    colorRGB: any = { r: 100, g: 102, b: 241 };

    colorHSB: any = { h: 239, s: 59, b: 95 };
}
