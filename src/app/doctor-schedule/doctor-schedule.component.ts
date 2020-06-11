import { Component, OnInit } from '@angular/core';
// import { DataService } from '../dataService/data.service';
import { NavigationService } from '../NavService/navigation.service';
import { HttpService } from '../httpService/http.service';
import { InteractionService } from '../datacommunication/interaction.service';
import { DateFormatService } from '../dateFormatService/date-format.service';
@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss'],
})
export class DoctorScheduleComponent {
  appointments=[];
  toggleState=true;
  array:Array<any>=[];
  num:number=0;
  today;
  constructor(
      private http :HttpService,
      public navigate: NavigationService,
      private comm: InteractionService,
      private format: DateFormatService) {
        this.today= new Date().toJSON().slice(0,10);    }

    
  async ionViewWillEnter()
  {
    this.array=[];
    this.appointments=[];
    var that = this;
    await this.http.getAppointments().subscribe((appointment)=>{
      that.array.push(appointment);
    },(error)=>{
      console.log("error: ", error);
    },
    ()=>
    {
       this.appointments = this.array;
    console.log(this.appointments);
    this.tabClick(this.num);
    });
   
  }
  checkIfEqualToday(num)
  {
    if(this.num==num) return true;
    else return false;
  }

  sendAndNavigate(app)
  {
    this.comm.sendAppointment(app);
    this.navigate.navigateTo('/home/appointment')
  }
  tabClick(num)
  {
    this.num=num;
    this.getAppointmentsOfTheDay(num);
  }

  getAppointmentsOfTheDay(num)
  {   
    this.appointments=[];

    this.array.forEach(element => {
      if(this.switch(num,element.appointment.date))
      {
        // element.appointment.date = this.format.formateDateToDayMonthYear(element.appointment.date);
        // element.appointment.time = this.format.formateTimeToHourMinuteAMorPM(element.appointment.time);
        this.appointments.push(element);
      }
    });
  }

  switch(num,date)
  {
    switch(num) { 
      case -1: { 
        return this.today>date;
      } 
      case 0: { 
        return this.today==date;
      } 
      case 1: { 
        return this.today<date;
      } 
      default:{
        return this.today==date;
      }
   } 
  }
  toggleContent(event)
  {
    this.toggleState = event;
  }

  
}
