import { Component } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var OT:any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private navigate:NavigationService
  ) {

  }
  startVideoCall()
  {
    console.log("startVideoCall");
    // this.router.navigate([1],{relativeTo:this.route});
    this.router.navigate(['home/video', 1]);
    // this.navigate.navigateTo('/home/video');
  }
  startVoiceCall()
  {
    console.log("startVideoCall");
    this.router.navigate(['home/video', 2]);

    // this.navigate.navigateTo('/home/audio');
  }
  doctorSchedule()
  {
    console.log("doctorSchedule");
    this.navigate.navigateTo('/home/schedule');
  }
  
  addAppointment()
  {
    console.log("addAppointment");
    this.navigate.navigateTo('/home/schedule/add-appointment');
  }
  appointment()
  {
    this.navigate.navigateTo('/home/appointment');

  }
}
