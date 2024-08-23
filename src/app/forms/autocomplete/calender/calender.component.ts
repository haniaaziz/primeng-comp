import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CalendarModule,FormsModule,CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
 date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;
    
     datetime12h: Date[] | undefined;

    datetime24h: Date[] | undefined;

    time: Date[] | undefined;
     date: Date | undefined;
}
