import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-convertor',
  templateUrl: './unit-convertor.component.html',
  styleUrls: ['./unit-convertor.component.css']
})
export class UnitConvertorComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.convertUnitsLength();
    this.convertUnitsArea();
    this.convertUnitsLand();
    this.convertUnitsVolume();
  }
  selected = 0;
  change(e:Event){
     //console.log(e.target);
    this.selected = (this.selected+1)%4;
  }

  // Length Code
  convertedLengths:any[]=[]
  length = 0;
  lengthUnits:any={
    "Meter":1,
    "cm":100,
    "mm":1000,
    "Yard":1.093613,
    "Foot":3.28083,
    "Inch":39.37007,
    "KM":0.001,
    "Mile":0.0006213689
  }
  
  convertToMeterLength(value:any, unit:string){
    if(value===null || value===undefined || !value){
      this.length=0;
    }
    else{
      value = parseFloat(value);
      this.length = value/this.lengthUnits[unit];
    }
    this.convertUnitsLength()
    return 0
    
  } 

  convertUnitsLength(){
    this.convertedLengths = [];
    for(let i of Object.keys(this.lengthUnits)){
      this.convertedLengths.push([
        this.length*this.lengthUnits[i], i
      ])
       //console.log(this.lengthUnits[i])
    }
    
  }
  // Length Code ends

  // Area Code
  convertedAreas:any[]=[]
  area = 0;
  areaUnits:any={
    "Meter²":1,
    "cm²":10000,
    "mm²":1000000,
    "Yard²":1.195990,
    "Foot²":10.763910417,
    "Inch²":1550.0031,
    "KM²":0.000001,
    "Mile²":0.0006213689*0.0006213689,
    "Hectare":0.0001,
    "acre":0.0002471054
  }
  
  convertToMeterArea(value:any, unit:string){
    if(value===null || value===undefined || !value){
      this.area=0;
    }
    else{
      value = parseFloat(value);
      this.area = value/this.areaUnits[unit];
    }
    this.convertUnitsArea();
    return 0;
    
  } 

  convertUnitsArea(){
    this.convertedAreas = [];
    for(let i of Object.keys(this.areaUnits)){
      this.convertedAreas.push([
        this.area*this.areaUnits[i], i
      ])
       //console.log(this.lengthUnits[i])
    }
    
  }
  // Area Code ends


  // Volume Code
  convertedVolumes:any[]=[]
  volume = 0;
  volumeUnits:any={
    "Meter³":1,
    "cm³":1000000,
    "mm³":1000000000,
    "Yard³":1.30795061,
    "Foot³":35.314666,
    "Inch³":61023.744095,
    "KM³":0.001*0.001*0.001,
    "liter":1000,
    "ml":1000000,
    "gallon":264.172176,
    "barrel":6.28981
  }
  
  convertToMeterVolume(value:any, unit:string){
    if(value===null || value===undefined || !value){
      this.volume=0;
    }
    else{
      value = parseFloat(value);
      this.volume = value/this.volumeUnits[unit];
    }
    this.convertUnitsVolume();
    return 0;
    
  } 

  convertUnitsVolume(){
    this.convertedVolumes = [];
    for(let i of Object.keys(this.volumeUnits)){
      this.convertedVolumes.push([
        this.volume*this.volumeUnits[i], i
      ])
       //console.log(this.lengthUnits[i])
    }
    
  }
  // Volume Code ends


  // Land Code
  convertedLands:any[]=[]
  land = 0;
  landUnits:any={
    "Hectare":1,
    "Acre":2.471054,
    "Bigha-Pakka(Assam/West Bengal)":7.475,
    "Bigha(Bihar/UP/Rajasthan/Punjab/Haryana)":3.954,
    "Bigha(Gujrat/Rajasthan)":6.178,
    "Bigha(HP/Uttarakhand)":12.356,
    "Bigha(HP-2/Uttarakhand-2)":13.289,
    "Bigha(MP)":9
  }
  
  convertToMeterLand(value:any, unit:string){
    if(value===null || value===undefined || !value){
      this.land=0;
    }
    else{
      value = parseFloat(value);
      this.land = value/this.landUnits[unit];
    }
    this.convertUnitsLand();
    return 0;
    
  } 

  convertUnitsLand(){
    this.convertedLands = [];
    for(let i of Object.keys(this.landUnits)){
      this.convertedLands.push([
        this.land*this.landUnits[i], i
      ])
       //console.log(this.lengthUnits[i])
    }
    
  }
  // Land Code ends


  // Swipe UI code
  swipeCoord:any;
  swipeTime:any;

  display(e:TouchEvent, when:string){
    const coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();
    if(when === 'start'){
      this.swipeCoord = coord;
      this.swipeTime = time;
    }else if(when=='end'){
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;
      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3))
        {
          const swipe = direction[0]<0? 'next':'previous';
          if(swipe==='next'){
            this.selected = (this.selected+1)%4;
          }else if(swipe==='previous'){
            if(this.selected === 0){
              this.selected = 3;
            }else{
              this.selected = (this.selected-1);
            }
            
          }
        }


    }
  }
}
