import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-host',
  templateUrl: './about-host.component.html',
  styleUrls: ['./about-host.component.css']
})
export class AboutHostComponent implements OnInit {

  isSelected:any='exp';

  constructor() { }

  ngOnInit(): void {
  }
  OpenE() : void {
    this.isSelected='exp';
    console.log(this.isSelected);
    
    
  }
  OpenR() : void {
    this.isSelected='req';
    console.log(this.isSelected);
    
    
  }
  OpenF() : void {
    this.isSelected='fav';
    console.log(this.isSelected);
    
    
  }
  OpenP() : void {
    this.isSelected='pro';
    console.log(this.isSelected);
    
    
  }
  OpenM() : void {
    this.isSelected='msg';
    console.log(this.isSelected);
    
    
  }

}
