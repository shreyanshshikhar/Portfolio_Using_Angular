import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hover: boolean = false; 

[x: string]: any;
  roles: string[] = ["Full Stack Web Developer", "Angular Developer", "MEAN Stack Developer"];
  roleIndex: number = 0;
  role: string | undefined;

  ngOnInit() {
    this.updateRole();
    setInterval(() => {
      this.updateRole();
    }, 3000);
  }

  ngAfterViewInit() {
    AOS.init();
  }

  updateRole() {
    this.role = this.roles[this.roleIndex];
    this.roleIndex = (this.roleIndex + 1) % this.roles.length;
  }
  
}
