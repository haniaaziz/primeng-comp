import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';


@Component({
  selector: 'app-selectbutton',
  standalone: true,
  imports: [FormsModule, SelectButtonModule, ToggleButtonModule],
  templateUrl: './selectbutton.component.html',
  styleUrl: './selectbutton.component.css'
})
export class SelectbuttonComponent {
value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-align-left', justify: 'Left' },
        { icon: 'pi pi-align-right', justify: 'Right' },
        { icon: 'pi pi-align-center', justify: 'Center' },
        { icon: 'pi pi-align-justify', justify: 'Justify' }
    ];
      checked: boolean = false;

}
