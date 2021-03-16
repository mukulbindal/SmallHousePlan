import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url = "https://play.google.com/store/apps/details?id=com.smallhouseplan.calculator";
  description = "Hey there! Follow this link to download my App!!\n";
  textToShare = encodeURI(this.description + this.url);
}
