
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-column-work',
  templateUrl: './column-work.component.html',
  styleUrls: ['./column-work.component.css']
})
export class ColumnWorkComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form: any;
  result: any = {};

  ngOnInit(): void {
    this.form = this.fb.group({
      wallHeight: ['', [Validators.required, this.number]],
      heightUnit: ['m', [Validators.required]],
      wallLength: ['', [Validators.required, this.number]],
      lengthUnit: ['i', [Validators.required]],
      wallThickness: ['', [Validators.required, this.number]],
      thicknessUnit: ['i', Validators.required],
      mortarRatio: ['[1.5,3]', Validators.required],
      numberOfBar: ['1', [Validators.required, this.number]],
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
    let T = this.toMeter(parseFloat(data.wallThickness), data.thicknessUnit);
    let x = 1;
    let [y, z] = JSON.parse(data.mortarRatio);
    let n = parseInt(data.numberOfBar);
    let dia = parseInt(data.diameterOfBar);
    let dbr = this.toMeter(parseFloat(data.dbr), data.dbrUnit);
    let WeightOfSteel = dia * dia * H * n / 162;
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
    let noOfRings = H / dbr + 1;

    this.result = {
      n,
      dia,
      H,
      W,
      T, noOfRings,
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
      AggregateCFT
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
