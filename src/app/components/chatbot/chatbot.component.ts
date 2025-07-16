import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  showWelcomeMessage: boolean = false;
  showChatbox: boolean = false;

  ngOnInit(): void {}

  onMouseEnter() {
    if (!this.showChatbox) {
      this.showWelcomeMessage = true;
    }
  }

  onMouseLeave() {
    this.showWelcomeMessage = false;
  }

  toggleChatbox() {
    this.showChatbox = !this.showChatbox;
    if (this.showChatbox) {
      this.showWelcomeMessage = false;
    }
  }

  // Method to close only the welcome popup
  closeWelcomeMessage() {
    this.showWelcomeMessage = false;
  }

  // Method to close the entire chatbox
  closeChatbox() {
    this.showChatbox = false;
    this.showWelcomeMessage = false; // Ensure welcome message is also hidden
  }
}
