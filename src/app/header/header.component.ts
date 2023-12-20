import { Component, OnInit } from '@angular/core';
import { WhatsappServiceService } from '../whatsapp-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private whatsappService: WhatsappServiceService) {}

  openWhatsApp() {
    const phoneNumber = "9336653962"; // Replace with your WhatsApp number
    this.whatsappService.openWithRandomMessage(phoneNumber);
  }
  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        if (navBar) {
          navBar.classList.toggle("active");
        }
      });
    }
  }
}
