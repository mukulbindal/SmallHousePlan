import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-calculations',
  templateUrl: './display-calculations.component.html',
  styleUrls: ['./display-calculations.component.css']
})
export class DisplayCalculationsComponent implements OnInit {
  data:any;
  q:any;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.data = history.state.data;
    this.q = history.state.quantities;

  }
  onClick(){
    this.router.navigate(['/rates'], {state:{quantities:this.q}});
  }

}
