import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certificates = [
    { title: 'Node js (Basics)', imageUrl: 'assets/node.png', link: 'https://www.hackerrank.com/certificates/00f21150a082' },
    { title: 'Javascript (Basics)', imageUrl: 'assets/js.png', link: 'https://www.hackerrank.com/certificates/1968551051b0' },
    { title: 'Angular (Basics)', imageUrl: 'assets/angular.png', link: 'https://www.hackerrank.com/certificates/e2d67f7b7d1d' },    { title: 'Css (Basics)', imageUrl: 'assets/css.png', link: 'https://www.hackerrank.com/certificates/a33f4bbf3046' },    { title: 'Google Cloud Computing foundation and Generative Ai (Basics)', imageUrl: 'assets/cloud.png',link: ''  }

  ];
}
