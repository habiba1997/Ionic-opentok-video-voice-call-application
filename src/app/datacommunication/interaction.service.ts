import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

import { appointment } from '../models/myAppointmentModel';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

 
private behavioralsubjForAppointment= new BehaviorSubject<any>(new appointment);
observableForAppointment =this.behavioralsubjForAppointment.asObservable();

 sendAppointment(app: appointment){
 this.behavioralsubjForAppointment.next( app);
 console.log(app);
 }


}
