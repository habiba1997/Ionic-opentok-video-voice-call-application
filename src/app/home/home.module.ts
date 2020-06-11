import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { NavigationService } from '../NavService/navigation.service';
import { VideoComponent } from '../video/video.component';
import { DoctorScheduleComponent } from '../doctor-schedule/doctor-schedule.component';
import { DataService } from '../dataService/data.service';
import { DoctorAddAppointmentComponent } from '../doctor-add-appointment/doctor-add-appointment.component';
import { RouterModule } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';
import { DoctorAppointmentsComponent } from '../doctor-appointments/doctor-appointments.component';
import { InteractionService } from '../datacommunication/interaction.service';
import { AudioComponent } from '../audio/audio.component';


// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
    
      },
      {
        path:'video/:id', 
        component:VideoComponent
      },
      {
        path:'schedule', 
        component:DoctorScheduleComponent
      },
      {
        path:'appointment', 
        component:DoctorAppointmentsComponent
      },
      {
        path:'schedule/add-appointment', 
        component:DoctorAddAppointmentComponent
      }  

    ])
  ],
  declarations: [HomePage,
    DoctorAddAppointmentComponent, 
    AudioComponent,
    VideoComponent,
    DoctorAppointmentsComponent,
    DoctorScheduleComponent], 
  providers:
  [
    InteractionService,
    HttpService,
    DatePicker,
    DataService,
    NavigationService,
    ActionSheetController,
    
  ],
  exports: [RouterModule]
})
export class HomePageModule {}
