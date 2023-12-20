import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  originalTransform: string = 'rotate(0deg'; 

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollRotate();
  }

  scrollRotate() {
    const image = document.querySelector('.about-image') as HTMLElement;
    image.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
  }

  resetRotation() {
    const image = document.querySelector('.about-image') as HTMLElement;
    image.style.transform = this.originalTransform;
  }
}
