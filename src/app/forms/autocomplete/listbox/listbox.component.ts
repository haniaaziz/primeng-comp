import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';


interface City {
    name: string,
    code: string
}

interface Country {
    name: string,
    code: string
}


@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [FormsModule, ListboxModule],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.css'
})
export class ListboxComponent implements OnInit {
    cities!: City[];

    selectedCities!: City[];

     countries!: Country[];

    selectedCountry!: Country;
    
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }

}
