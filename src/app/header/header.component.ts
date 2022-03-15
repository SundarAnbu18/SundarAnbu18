import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
  }
  sendMessage(message:string){
    this.messageService.Sendmessage(message);
  }

}
