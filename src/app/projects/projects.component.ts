import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
githubLink: any;
description: any;
title: any;
imageUrl: any;
items=[{imageUrl:'assets/portfolioWebsite.png',title:'PORTFOLIO WEBSITE',description:' Personal portfolio website using Angular, showcasing my skills and projects. Integrated engaging animation effects with the AOS library for a dynamic user experience and saving form data using Formspree',githubLink:'http://localhost:4200/'},{imageUrl:'assets/food.gif' ,title:'FOOD ORDER WEBSITE',description:'Website is made using angular.🌟 Key Features (for now):🛒 Add to Cart: Easily select and add your favorite dishes to your cart, making ordering a breeze.🔍 Food Search: Quickly find the cuisine or dish you are craving for a delightful dining experience.',githubLink:'https://github.com/shreyanshshikhar/Food-order-Website-Angular'},{imageUrl:'assets/blog.gif',title:'BLOG WEBSITE USING MEAN STACK',description:'The backend, built on Express and NodeJS, ensures secure user management and data storage in MongoDB. Angular on the frontend delivers a dynamic article platform with engaging features, static pages for information, and an upcoming Admin Panel for enhanced control.',githubLink:'https://github.com/shreyanshshikhar/MEAN-STACK-BLOG-WEBSITE'},{title:'Portfolio using  HTML CSS',imageUrl:'assets/port.gif',description:'Made during initial stage of learning.a fully responsive website using pure HTML and CSS. Implemented form input acceptance through Formspree for seamless data collection.',githubLink:'https://shreyanshshikhar.github.io/portfolio/'},{title:'For More Projects...',imageUrl:'assets/repo.gif',description:'Click on the link to explore more  projects, including a Spotify clone, a news app, a Netflix clone, a to-do list application, and many more!',githubLink:'https://github.com/shreyanshshikhar?tab=repositories'}]
}
