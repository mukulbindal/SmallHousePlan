import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slab-work',
  templateUrl: './slab-work.component.html',
  styleUrls: ['./slab-work.component.css']
})
export class SlabWorkComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  form: any;
  result: any = {};

  ngOnInit(): void {
    this.form = this.fb.group({
      wallHeight: ['', [Validators.required, this.number]],
      heightUnit: ['f', [Validators.required]],
      wallLength: ['', [Validators.required, this.number]],
      lengthUnit: ['f', [Validators.required]],
      wallThickness: ['10', [Validators.required, this.number]],
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
    const data = this.form.value;
    let H = this.toMeter(parseFloat(data.wallHeight), data.heightUnit);
    let W = this.toMeter(parseFloat(data.wallLength), data.lengthUnit);
    let T = parseFloat(data.wallThickness) / 100;
    let x = 1;
    let [y, z] = JSON.parse(data.mortarRatio);
    let dia = parseInt(data.diameterOfBar);
    let dbr = this.toMeter(parseFloat(data.dbr), data.dbrUnit);

    let NumberOfBarH = (1 + H / dbr)
    let NumberOfBarW = (1 + W / dbr)
    let LengthOfBar = H * NumberOfBarH + W * NumberOfBarW;

    let WeightOfSteel = dia * dia * LengthOfBar / 162;
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

    this.result = [
      ['Cement Required', this.round(cementWeightKg) + " Kg or " + Math.ceil(cementWeightKg / 50) + " Bag(s)"],
      ['Sand Required', this.round(SandVolume) + "m³ or " + this.round(SandCFT) + " ft³"],
      ['Aggregate', this.round(AggregateVolume) + "m³ or " + this.round(AggregateCFT) + " ft³"],
      ['Steel Bars', this.round(WeightOfSteel) + " Kg"],
    ]
    // console.log(
    //   {
    //      H, W, dbr, T, LengthOfBar, WeightOfSteel
    //   }
    // )
    const quantities = {
      Brick:0,
      Cement:Math.ceil(cementWeightKg/50),
      Sand:this.round(SandCFT),
      aggregate:this.round(AggregateCFT),
      steel:this.round(WeightOfSteel)
    }
    this.router.navigate(['/results'], {state:{data:this.result,quantities}});

  }
  round(num: number) {
    return num.toFixed(5);
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
