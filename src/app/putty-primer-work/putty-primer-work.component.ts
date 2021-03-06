import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-putty-primer-work',
  templateUrl: './putty-primer-work.component.html',
  styleUrls: ['./putty-primer-work.component.css']
})
export class PuttyPrimerWorkComponent implements OnInit {
  constructor(private fb: FormBuilder, private router:Router) { }
  form:any;
  result:any = {};

  ngOnInit(): void {
    this.form = this.fb.group({
      wallHeight:['',[Validators.required, this.number]],
      heightUnit:['f',[Validators.required]],
      wallLength:['',[Validators.required, this.number]],
      lengthUnit:['f',[Validators.required]],
      isDoor:['0', Validators.required],
      doorWidth:['0', [Validators.required]],
      doorHeight:['0', [Validators.required]],
      doorUnit:['f', Validators.required],
      windowWidth:['0', [Validators.required]],
      windowHeight:['0', [Validators.required]],
      windowUnit:['f', Validators.required],
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
    let dH = this.toMeter(parseFloat(data.doorHeight), data.doorUnit);
    let dW = this.toMeter(parseFloat(data.doorWidth), data.doorUnit);
    let wH = this.toMeter(parseFloat(data.windowHeight), data.windowUnit);
    let wW = this.toMeter(parseFloat(data.windowWidth), data.windowUnit);

    let Area = H*L - dH*dW - wH*wW;
    Area = Area*10.7639; // In sq feet

    const putty2coat = this.round(Area/14);
    const putty3coat = this.round(Area/10);
    const primer1coat = this.round(Area/130);
    const primer2coat = this.round(Area/95);
    const paint1coat = this.round(Area/150);
    const paint2coat = this.round(Area/75);
    const space = "                                ";
    this.result = [
      ['Putty Required', putty2coat+" Kg for 2 coats and "+putty3coat+" Kg for 3 coats"],
      ['Primer Required', primer1coat+" ltr for 1 coat and "+primer2coat+" ltr for 2 coats"],
      ['Paint Required',paint1coat+" ltr for 1 coat and "+paint2coat+" ltr for 2 coats"]
    ]
    const quantities = {
      putty2coat,
      putty3coat,
      primer1coat,
      primer2coat,
      paint1coat,
      paint2coat
    }
    this.router.navigate(['/results'], {state:{data:this.result,quantities}});
    
  }

  round(num:number){
    return num.toFixed(5);
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
