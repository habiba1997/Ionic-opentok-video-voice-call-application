import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }
  formateDateToDayMonthYear(myDate)
  {
    return moment(myDate).format('dddd MM, YYYY');  

  }
  formateTimeToHourMinuteAMorPM(myTime)
  {
    return moment(myTime).format('hh:mm A');
  }
  formateDateToDaySlashMonthSlashYear(myDate)
  {
    return myDate.slice(0,10);

  }
  
  formatAMPM(date) {
 
	  var hours = date[0];
	  var minutes = date[1];
	  var ampm = hours >= 12 ? 'PM' : 'AM';
	  hours = hours % 12;
	  hours = hours ? hours : 12;
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
}
}
