import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-host',
  templateUrl: './setting-host.component.html',
  styleUrls: ['./setting-host.component.css']
})
export class SettingHostComponent implements OnInit {
  isSelected:any;

  constructor() { }

  ngOnInit(): void {
  }
  OpenP() : void {
    this.isSelected='personal';
    console.log(this.isSelected);
    
    
  }
  OpenC() : void {
    this.isSelected='connect';
    console.log(this.isSelected);
    
    
  }
  OpenH() : void {
    this.isSelected='help';
    console.log(this.isSelected);
    
    
  }
  OpenL() : void {
    this.isSelected='out';
    console.log(this.isSelected);
    
    
  }
  affecterClass() {
    return {
      "text-sky-600" : true 
    };
  }

}
