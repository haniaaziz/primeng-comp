import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-block-ui',
  standalone: true,
  imports: [BlockUIModule, ButtonModule, PanelModule, RippleModule],
  templateUrl: './block-ui.component.html',
  styleUrl: './block-ui.component.css'
})
export class BlockUIComponent {
        blockedPanel: boolean = false;

} 
