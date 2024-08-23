import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel"  
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-floatlabel',
  standalone: true,
  imports: [FloatLabelModule,CommonModule,FormsModule,InputTextModule ],
  templateUrl: './floatlabel.component.html',
  styleUrl: './floatlabel.component.css'
})
export class FloatlabelComponent {
    value: string | undefined;
}
