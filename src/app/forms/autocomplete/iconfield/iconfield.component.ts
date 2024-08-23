import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-iconfield',
  standalone: true,
  imports: [InputIconModule, IconFieldModule, InputTextModule, FormsModule],
  templateUrl: './iconfield.component.html',
  styleUrl: './iconfield.component.css'
})
export class IconfieldComponent {

}
