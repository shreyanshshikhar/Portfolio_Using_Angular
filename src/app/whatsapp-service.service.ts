import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WhatsappServiceService {
  openWithRandomMessage(phoneNumber: string): void {
    const messages = [
      "Hi... ",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = encodeURIComponent(messages[randomIndex]);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsappURL;
  }
}
