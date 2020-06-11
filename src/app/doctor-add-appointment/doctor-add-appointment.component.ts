import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ActionSheetController } from '@ionic/angular';
import { NavigationService } from '../NavService/navigation.service';
import { HttpService } from '../httpService/http.service';
import { myBackendAppointment } from '../models/mybackendreturnedappointmentmodel';
import { appointmentdatetime } from '../models/datetime';
import { InteractionService } from '../datacommunication/interaction.service';
import { DateFormatService } from '../dateFormatService/date-format.service';

@Component({
  selector: 'app-doctor-add-appointment',
  templateUrl: './doctor-add-appointment.component.html',
  styleUrls: ['./doctor-add-appointment.component.scss'],
})
export class DoctorAddAppointmentComponent  {



  constructor(private datePicker: DatePicker,
    public actionSheetController: ActionSheetController,
    private navigate: NavigationService,
    private http: HttpService,
    private comunication: InteractionService,
    private format: DateFormatService) { }
    
    myDate;
    myTime;
    myDuration=15;
    error:boolean=false;
    
    check()
    {
      if(this.myDate==null || this.myTime==null)
      {
        this.error=true;
      }
      else
      {
        this.error=false;
        this.presentActionSheet();
      }
    }

  async presentActionSheet() {
  

    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure? ',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Date: '+ this.format.formateDateToDayMonthYear(this.myDate),
        icon: 'calendar-outline',
      }, {
        text: 'Time: '+ this.format.formateTimeToHourMinuteAMorPM(this.myTime),
        icon: 'alarm-outline',
      }, {
        text: 'Duration: '+ this.myDuration+' minutes',
        icon: 'timer-outline',
      }, 
      {
        text: 'Yes',
        icon: 'happy-outline',
        handler: () => {        
            let datetime =  new appointmentdatetime(
              this.format.formateDateToDaySlashMonthSlashYear(this.myDate),
              this.format.formateTimeToHourMinuteAMorPM(this.myTime)); 
            let appointment = new myBackendAppointment(6,23,null,false,datetime,this.myDuration *60);
            this.addappointment(appointment);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  // click()
  // {
  //    this.datePicker.show({
  //   date: new Date(),
  //   mode: 'date',
  //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  // }).then(
  //   date => console.log('Got date: ', date),
  //   err => console.log('Error occurred while getting date: ', err)
  // );
  // }
  



  addappointment(appointment)
  {
    this.http.postAppointment(appointment).subscribe(
    (appointment)=>
      {
          //datacommunication
      },
    async (error)=>
      {
        console.log("Error: ", error);        
        appointment = this.http.getapp(appointment);
        await this.comunication.sendAppointment(appointment);
        this.navigate.navigateTo('/home/appointment');

      },
    ()=>
      {
        
      });
  }

}
