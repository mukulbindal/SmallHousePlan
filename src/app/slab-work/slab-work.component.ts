import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slab-work',
  templateUrl: './slab-work.component.html',
  styleUrls: ['./slab-work.component.css']
})
export class SlabWorkComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: any;
  result: any = {};

  ngOnInit(): void {
    this.form = this.fb.group({
      wallHeight: ['', [Validators.required, this.number]],
      heightUnit: ['m', [Validators.required]],
      wallLength: ['', [Validators.required, this.number]],
      lengthUnit: ['m', [Validators.required]],
      wallThickness: ['', [Validators.required, this.number]],
      mortarRatio: ['[1.5,3]', Validators.required],
      diameterOfBar: ['10', Validators.required],
      dbr: ['', [Validators.required]],
      dbrUnit: ['i', [Validators.required]]
    })
  }
  toMeter(l: number, unit: string) {
    if (unit === "mm") {
      return l / 1000;
    } else if (unit === "i") {
      return l * 0.0254;

    }
    else if (unit === "f") { return l * 0.3048 }
    return l;
  }
  onSubmit() {
    console.log(this.form.value); 
    const data = this.form.value;
    let H = this.toMeter(parseFloat(data.wallHeight), data.heightUnit);
    let W = this.toMeter(parseFloat(data.wallLength), data.lengthUnit);
    let T = parseFloat(data.wallThickness)/100;
    let x = 1;
    let [y, z] = JSON.parse(data.mortarRatio);
    let dia = parseInt(data.diameterOfBar);
    let dbr = this.toMeter(parseFloat(data.dbr), data.dbrUnit);

let NumberOfBar=2+(H+W)/dbr;
let LengthOfBar=(H+W)*NumberOfBar;

    let WeightOfSteel = dia * dia *LengthOfBar/ 162;
    let WetVolume = H * W * T;
    let DryVolume = 1.54 * WetVolume;
    let SteelVolume = WeightOfSteel / 7850;
    let NetVolume = DryVolume - SteelVolume;
    let CementVolume = x * NetVolume / (x + y + z);
    let cementWeightKg = CementVolume * 1450;
    let SandVolume = y * NetVolume / (x + y + z);
    let SandCFT = SandVolume * 35.3147;
    let AggregateVolume = z * NetVolume / (x + y + z);
    let AggregateCFT = AggregateVolume * 35.31;
    

    this.result = {
      
      dia,NumberOfBar,LengthOfBar,
      H,
      W,
      T, 
      cementWeightKg,
      WeightOfSteel,
      WetVolume,
      DryVolume,
      SteelVolume,
      NetVolume,
      CementVolume,
      SandVolume,
      SandCFT,
      AggregateVolume,
      AggregateCFT,
      dbr
    }
    console.log(this.result);

  }

  number(c: FormControl) {
    if (parseFloat(c.value) >= 0) return null;
    return { NumericError: true };
  }

  resetDoor() {
    this.form.controls.doorWidth.value = '0';
    this.form.controls.doorHeight.value = '0';
    this.form.controls.doorWidth.status = "VALID";
    this.form.controls.doorHeight.status = "VALID";
  }

  resetWindow() {
    this.form.controls.windowWidth.value = '0';
    this.form.controls.windowHeight.value = '0';
    this.form.controls.windowWidth.status = "VALID";
    this.form.controls.windowHeight.status = "VALID";
  }

}
