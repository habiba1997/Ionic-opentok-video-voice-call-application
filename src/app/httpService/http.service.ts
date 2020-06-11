import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { appointment } from '../models/myAppointmentModel';
import { myBackendAppointment } from '../models/mybackendreturnedappointmentmodel';
import { DataService } from '../dataService/data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    private _jsonURL = 'assets/data.json';
    constructor(private http: HttpClient,
      private data: DataService) {
    }
    public getAppointments(){
      return this.http.get<any>(this._jsonURL).pipe(
        flatMap(appointments => appointments),
        map((data:myBackendAppointment)=>
        {
          if(data.patientId)
          {
            let patientIndex = this.data.patients.findIndex((x)=>x.patientId ===data.patientId);
            // console.log("found here");
            // console.log("FOUND: ", this.data.patients[patientIndex]);
            return new appointment(data.Id,data.doctorId,data.patientId,data.registered
              ,data.appointment, data.duration, this.data.patients[patientIndex]); 
          }
          else{
            return new appointment(data.Id,data.doctorId,data.patientId,data.registered
              ,data.appointment, data.duration, null); 
          }
          
        })
      );
    }

    public postAppointment(myappointment: myBackendAppointment){
      return this.http.post<any>(this._jsonURL, myappointment).pipe(
        map((data:myBackendAppointment)=>
        {    
            return new appointment(data.Id,data.doctorId,data.patientId,data.registered
              ,data.appointment, data.duration, null);   
        })
      );
     
    }

    public getapp(myappointment)
    {
      return new appointment(myappointment.Id,myappointment.doctorId,myappointment.patientId,myappointment.registered
        ,myappointment.appointment, myappointment.duration, null); 
    }
}
