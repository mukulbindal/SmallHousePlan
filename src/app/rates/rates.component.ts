import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  quantities:any;
  keycode:any;
  isPutty = false;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.quantities = history.state.quantities;
    let data:any;
    // console.log(this.quantities)
    if(this.quantities.putty2coat === undefined){
      data= this.data;
    }
    else {
      data = this.data2;
      this.isPutty = true;
    }
    for(let key of Object.keys(data)){
      data[key].quantity = this.quantities[key];
    }
    // console.log(data)
  }
  gtotal = 0;
  data2={
    putty2coat:{
      label:"Putty 2 Coats",
      quantity:0,
      rate:0,
      unit:["Kg"],
      selectedUnit : "Kg",
      result:0
    },
    putty3coat:{
      label:"Putty 3 Coats",
      quantity:0,
      rate:0,
      unit:["Kg"],
      selectedUnit : "Kg",
      result:0
    },
    primer1coat:{
      label:"Primer 1 Coat",
      quantity:0,
      rate:0,
      unit:["ltr"],
      selectedUnit : "ltr",
      result:0
    },
    primer2coat:{
      label:"Primer 2 Coat",
      quantity:0,
      rate:0,
      unit:["ltr"],
      selectedUnit : "ltr",
      result:0
    },
    paint1coat:{
      label:"Paint 1 Coat",
      quantity:0,
      rate:0,
      unit:["ltr"],
      selectedUnit : "ltr",
      result:0
    },
    paint2coat:{
      label:"Paint 2 Coats",
      quantity:0,
      rate:0,
      unit:["ltr"],
      selectedUnit : "ltr",
      result:0
    },

  }
  data = {
    Brick:{
      label:"Bricks",
      quantity:0,
      rate:0,
      unit:["1000"],
      selectedUnit : "1000",
      result:0
    },

    Cement:{
      label:"Cement Bag",
      quantity:0,
      rate:0,
      unit:["bag"],
      selectedUnit : "bag",
      result:0
    },

    Sand:{
      label:"Sand (ft³)",
      quantity:0,
      rate:0,
      unit:["ft³","m³"],
      selectedUnit : "ft³",
      result:0
    },
    aggregate:{
      label:"Aggregate (ft³)",
      quantity:0,
      rate:0,
      unit:["ft³","m³"],
      selectedUnit : "ft³",
      result:0
    },
    steel:{
      label:"Steel Bars (Kg)",
      quantity:0,
      rate:0,
      unit:["quintal","Kg"],
      selectedUnit : "quintal",
      result:0
    },
  };

  setData(e:Event, key:any, type:any){
    const data:any = this.isPutty?this.data2:this.data;
    const item = data[key];
    if(type==='rate')
    item.rate = (<HTMLInputElement>e.target).value;
    else
    item.selectedUnit = (<HTMLSelectElement>e.target).value;

    if(item.selectedUnit ==="bag"){
      item.result = item.rate * item.quantity;
    }else if(item.selectedUnit === "1000"){
      item.result = item.rate * item.quantity / 1000;
    }else if(item.selectedUnit === "ft³"){
      item.result = item.rate * item.quantity;
    }else if(item.selectedUnit === "m³"){
      item.result = item.rate * item.quantity * 0.0283168;
    }
    else if(item.selectedUnit === "Kg"){
      item.result = item.rate * item.quantity;
    }
    else if(item.selectedUnit === "quintal"){
      item.result = item.rate * item.quantity/100;
    }else if(item.selectedUnit === "ltr"){
      item.result = item.rate * item.quantity;
    }
    item.result = parseFloat(item.result.toFixed(5));
    // this.data = data;
    this.calculate();
  }
  

  calculate(){
    const data:any = this.isPutty?this.data2:this.data;
    this.gtotal=0;
    for (const key of Object.keys(data)) {
      this.gtotal += data[key].result;
    }
    this.gtotal = parseFloat(this.gtotal.toFixed(5));
  }

}