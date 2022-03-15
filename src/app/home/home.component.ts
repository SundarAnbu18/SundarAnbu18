import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message:string | undefined;

  
  constructor(private messageSevice:MessageService) { }
 

  ngOnInit(): void {
    this.messageSevice.receivedMessage().subscribe((d)=>{
      this.message=d
    })
  }

}
