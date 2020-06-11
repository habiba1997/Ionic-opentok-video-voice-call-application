import { patientData } from './patientData';
import { appointmentdatetime } from './datetime';

export class appointment {
    Id:number;
    doctorId:number;
    patientId:number;
    registered:boolean;
    appointment:appointmentdatetime;
    duration:number;
    patient:patientData;
   

    constructor(Id?:number,doctorId?:number,patientId?:number,registered?:boolean
        ,appointment?:appointmentdatetime, duration?:number, patient?:patientData) {    
      this.Id = Id;
      this.doctorId=doctorId;
      this.patientId = patientId;
      this.registered=registered;
      this.appointment=appointment;
      this.duration = duration;
      
      this.patient=patient;

    
    } 
}

