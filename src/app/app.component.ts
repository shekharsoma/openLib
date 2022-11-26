import { Component } from '@angular/core';
import { OpenlibService } from "./openlib.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  selectedDate: any;
constructor(private openLib: OpenlibService){
  this.selectedDate = {};
}
  ngOnInit(): void {
    this.openLib.getDetails().subscribe((res) => {
     console.log("----"+res["ISBN:9780980200447"].url);
     this.selectedDate = res["ISBN:9780980200447"]
     console.log("--111--"+this.selectedDate.title);
     console.log("--22--"+this.selectedDate.cover.medium);
     console.log("--333--"+this.selectedDate.number_of_pages);
    });
  }
}
