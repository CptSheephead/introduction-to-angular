import { Component, Input, Output, EventEmitter} from '@angular/core';
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-housing-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.css'
})
export class HousingListComponent {

  @Input() locationList: HousingLocation[] = [];
  results:HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() {}

  searchHousingLocations(searchText: string) {
    this.results = this.locationList
    .filter(location => location.city.toLowerCase()
    .includes(searchText
      .toLowerCase()));
    if (!searchText) return;
  }

  selectHousingLocation(location: HousingLocation){
    this.locationSelectedEvent.emit(location);
  }
}