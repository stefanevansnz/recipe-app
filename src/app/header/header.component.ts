import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedHeading = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature) {
    //console.log(feature);
    this.selectedHeading.emit(feature); 
  }

}
