import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../datacommunication/interaction.service';
import { NavigationService } from '../NavService/navigation.service';
import { DateFormatService } from '../dateFormatService/date-format.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss'],
})
export class DoctorAppointmentsComponent  implements OnInit{

  cards=[]
  constructor(
    private communication: InteractionService, 
    private navigate: NavigationService, 
    private format: DateFormatService
  ) { }

  ngOnInit() {
    console.log("hey in ng on init");
    let that = this;
  
    this.communication.observableForAppointment.subscribe(
      (data)=> { 
      //   let newData = data;
      // console.log("data: ");
      // console.log( newData.appointment.date);
      // console.log( newData.appointment.time);
      // newData.appointment.date = this.format.formateDateToDayMonthYear(data.appointment.date);
      // // data.appointment.time = this.format.formateTimeToHourMinuteAMorPM(data.appointment.time);

      that.cards.push(data);

    },
    (error)=>{
      this.navigate.navigateTo('home')
    });
  }

  ionViewDidLeave()
  {
    this.cards=[];
  }

}
