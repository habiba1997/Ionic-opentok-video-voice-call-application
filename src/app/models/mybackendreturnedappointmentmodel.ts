import { appointmentdatetime } from './datetime';

export class myBackendAppointment {
    Id:number;
    doctorId:number;
    patientId:number;
    registered:boolean;
    appointment:appointmentdatetime;
    duration:number;
    
   

    constructor(Id?:number,doctorId?:number,patientId?:number,registered?:boolean
        ,appointment?:appointmentdatetime, duration?:number) {    
      this.Id = Id;
      this.doctorId=doctorId;
      this.patientId = patientId;
      this.registered=registered;
      this.appointment=appointment;
      this.duration = duration;   
    } 
}

