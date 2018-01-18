import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() selectedHeading = 'recipes';

  onNavigate(heading: string) {
    //console.log('onNavigate = ' + heading);
    this.selectedHeading = heading;
  }

}
