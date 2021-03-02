import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plaster-work',
  templateUrl: './plaster-work.component.html',
  styleUrls: ['./plaster-work.component.css']
})
export class PlasterWorkComponent implements OnInit {


  constructor(private fb: FormBuilder, private router : Router) { }
  form:any;
  result:any = {};

  ngOnInit(): void {
    this.form = this.fb.group({
      wallHeight:['',[Validators.required, this.number]],
      heightUnit:['m',[Validators.required]],
      wallLength:['',[Validators.required, this.number]],
      lengthUnit:['m',[Validators.required]],
      wallThickness:['12', Validators.required],
      mortarRatio:['4', Validators.required],
      isDoor:['0', Validators.required],
      doorWidth:['0', [Validators.required]],
      doorHeight:['0', [Validators.required]],
      doorUnit:['m', Validators.required],
      windowWidth:['0', [Validators.required]],
      windowHeight:['0', [Validators.required]],
      windowUnit:['m', Validators.required],
      isWindow:['0', Validators.required]
    },)
  }
  toMeter(l:number, unit:string){
    if(unit==="f"){
      return 0.3048*l;
    } else {
      return l;
    }
  }
  onSubmit(){
    const data = this.form.value;    
    let H = this.toMeter(parseFloat(data.wallHeight), data.heightUnit);
    let L = this.toMeter(parseFloat(data.wallLength), data.lengthUnit);
    let W = parseFloat(data.wallThickness)/1000;
    let x = 1;
    let y = parseInt(data.mortarRatio);
    let dH = this.toMeter(parseFloat(data.doorHeight), data.doorUnit);
    let dW = this.toMeter(parseFloat(data.doorWidth), data.doorUnit);
    let wH = this.toMeter(parseFloat(data.windowHeight), data.windowUnit);
    let wW = this.toMeter(parseFloat(data.windowWidth), data.windowUnit);

    let volOfWall = (H*L - dH*dW - wH*wW)*W
    // const brickVol = 0.001539;
    // const brickwithMortar = 0.002;
    // const noOfBricks = volOfWall/brickwithMortar;
    let qtyMortar = volOfWall ;
    
    const dryMortar = qtyMortar*1.35;
    let cementVol = dryMortar*x / (x+y);
    let sandVol = dryMortar*y/(x+y);
    let cementWeightKg = cementVol*1440;
    let cementCFT = cementVol*35.31;
    let sandWeight1 = sandVol*1450;
    let sandWeight2 = sandVol*1500;
    let sandCFT = sandVol*35.31;
    this.result = [
      ['Cement Required', this.round(cementWeightKg)+" Kg or "+Math.ceil(cementWeightKg/50)+" Bag(s)"],
      ['Sand Required', this.round(sandWeight1)+" to "+this.round(sandWeight2)+" Kg or "+this.round(sandVol)+"m³ or "+this.round(sandCFT)+" ft³"],
    ]
    this.router.navigate(['/results'], {state:{data:this.result}});
  }

  round(num:number){
    return Math.round(num * 100) / 100
  }

  number(c:FormControl){
    if(parseFloat(c.value)>=0) return null ;
    return {NumericError:true};
  }
    
  resetDoor(){
    this.form.controls.doorWidth.value='0';
    this.form.controls.doorHeight.value='0';
    this.form.controls.doorWidth.status = "VALID";
    this.form.controls.doorHeight.status = "VALID";
  }

  resetWindow(){
    this.form.controls.windowWidth.value='0';
    this.form.controls.windowHeight.value='0';
    this.form.controls.windowWidth.status = "VALID";
    this.form.controls.windowHeight.status = "VALID";
  }
}
