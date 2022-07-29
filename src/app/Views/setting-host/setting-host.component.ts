import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-setting-host',
  templateUrl: './setting-host.component.html',
  styleUrls: ['./setting-host.component.css']
})
export class SettingHostComponent implements OnInit {
  isSelected:any='personal';
  stateOptions: any[];
  value1: string = 'off';

  constructor(private primeNGConfig: PrimeNGConfig) {
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];
   }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
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


}
