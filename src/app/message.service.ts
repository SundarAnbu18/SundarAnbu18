import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  private subject=new BehaviorSubject<string>("burger")   //if we make use of behacior subject we have to spectify the default value

  constructor() { }

  Sendmessage(message:string){          //i am sending the data in the form of string so i have to mention here aswell
    this.subject.next(message)
  }
  receivedMessage():Observable<string>{    // i am going to receive the data as a datatype of string so i have to mention the datatype in the observable
    return this.subject.asObservable();
  }
}
