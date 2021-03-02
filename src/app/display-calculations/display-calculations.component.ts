import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-calculations',
  templateUrl: './display-calculations.component.html',
  styleUrls: ['./display-calculations.component.css']
})
export class DisplayCalculationsComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit(): void {
    this.data = history.state.data;
  }

}
