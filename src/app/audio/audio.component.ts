import { Component, OnDestroy } from '@angular/core';
import { NavigationService } from '../NavService/navigation.service';

declare var OT:any;
//web

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})

export class AudioComponent implements OnDestroy {


  ngOnDestroy() {
console.log("onDestroy");

  }

  session: any;
  publisher: any;
  apiKey: any;
  sessionId: string;
  token: string;

  speaker:boolean = true;
  mute:boolean = false;
  videoToggleVariable:boolean = true;
  subscriber:any;
  // myCondition:boolean=true;

  
  constructor(private navigate: NavigationService) {
    console.log("inside video component");
    this.apiKey = "46767002";
    this.sessionId = "1_MX40Njc2NzAwMn5-MTU5MTEyNjI3ODI1OX5VNVVFQ24wYXFVY2loa2h4M0lXSXZSdk5-UH4";
    this.token = "T1==cGFydG5lcl9pZD00Njc2NzAwMiZzaWc9Njg3ZDI1MDkxZjJmZWFkNWNjMzIyZWJkNzAwMGQ4OTVkODdhZTZiNTpzZXNzaW9uX2lkPTFfTVg0ME5qYzJOekF3TW41LU1UVTVNVEV5TmpJM09ESTFPWDVWTlZWRlEyNHdZWEZWWTJsb2EyaDRNMGxYU1haU2RrNS1VSDQmY3JlYXRlX3RpbWU9MTU5MTgyODY1OSZub25jZT0wLjg0NTI5Mjg1MTI2NTUyNDkmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5MTgzMjI1OCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";  
    if (OT.checkSystemRequirements() == 1) {
      this.session = OT.initSession(this.apiKey, this.sessionId);
   } else {
    this.handleError("Your mobile doesn't support webrtc , please use a different mobile");
   }
  }


   publishOptions = {
      
    insertMode: 'append',
    width: '100%',
    height:'100%',
    showControls: false,
    usePreviousDeviceSelection: true,
    publishAudio:true, 
    publishVideo:false

    // style: {
    //   buttonDisplayMode: "auto",}
  };



    //place 
    // publishAudio:true, publishVideo:false
    // in publish option to make it a voice rather than a video

    //{fitMode: "cover"}
    // "auto" — The mute button is displayed when the stream is 
    // first displayed and when the user mouses over the video (the default).

    //TokBox supports voice only calls.  You can disable video when you define 
    //the publisher on the client by setting videoSource to null in the publisher properties.
    
   Subscripetoptions = {
    insertMode: 'append',
    width: '100%',
    height:'100%',
    showControls: false,
    publishAudio:true, 
    publishVideo:false

  };

  disableVideo:boolean=false;
  ionViewDidEnter()
  {
    console.log("ionViewDidEnter");
    this.startCall();
    // this.disableVideo = false;
  }

  ionViewDidLeave()
  {
    console.log("Ion will did leave ");
    this.ngOnDestroy();
  }

  // ngOnInit(){
  //   console.log("ngOninit");
  //   // if (this.publisher) {
  //   //   this.session.unpublish(this.publisher);
  //   // }
  //   // this.publisher = null;


  //   // console.log("bd5ol ngOn init");

  //   // this.publishOptions.showControls= false;

  //   // this.publisher = OT.initPublisher('publisher', this.publishOptions);
  //   // this.publisher.on({
  //   //   accessDialogOpened: function (event) {
  //   //     console.log("The Allow/Deny dialog box is opened");
        
  //   //   },
  //   //   accessDialogClosed: function (event) {
  //   //     console.log("The Allow/Deny dialog box is closed.");
  //   //   }
  //   // });

  // }

  startCall()
  {
    console.log("ngOninit");
    if (this.publisher) {
      this.session.unpublish(this.publisher);
    }
    this.publisher = null;


    console.log("bd5ol ngOn init");


    this.publisher = OT.initPublisher('publisher', this.publishOptions);

    let that = this;

    // this.myCondition=false;


    this.session.on({
      streamCreated: (event: any) => {
        that.subscriber = this.session.subscribe(event.stream, 'subscriber', this.Subscripetoptions);
      },
      streamDestroyed: (event: any) => {
        // if(this.mute)
        // {
        //   this.mute=false;
        // }
        // if(event.stream.channel[0].active) //true when diconnected , false when unpublish
        // {
             this.handleError(`Stream ${event.stream.name} ended because ${event.reason}`);

        // }
        // this.myCondition=true;;

      },
      sessionConnected: (event: any) => {
        this.session.publish(this.publisher);
      }
    });


    this.session.connect(this.token, (error: any) => {
      if (error) {
        // console.log(JSON.stringify(error));
        console.log(`There was an error connecting to the session ${error}`);
        if(error.code==1004)
        {
          this.handleError("Your Session has expired");
        }
      }
     
    });
  }

  cameraCycle()
  {
    if (this.publisher) this.publisher.cycleVideo().then(console.log);
  }
  diconnect()
  {
    // this.myCondition=true;
    console.log("diconnectt");
    this.session.disconnect();
    this.navigate.navigateTo('/home');
  }
  videoToggle()
  {    
    console.log("video: ", this.videoToggleVariable);
    if(this.videoToggleVariable)
    {
          this.publisher.publishVideo(false);
          this.videoToggleVariable=false;
          // this.session.unpublish(this.publisher);
    }
    else{
      this.disableVideo=true;
      this.publisher.publishVideo(true);
      // this.session.publish(this.publisher);
      this.videoToggleVariable=true;
    
      // var pubOptions = {publishAudio:true, publishVideo:false};
    // if (this.publisher) {
    //   console.log("publisher exist");
    //   this.session.unpublish(this.publisher);
    // }
    // this.publisher = null;

    // this.publisher = OT.initPublisher('publisher', this.publishOptions);
    // this.session.publish(this.publisher);
    // if(this.mute)
    // {
    //   this.publisher.publishAudio(false);
    // }
    // if(this.speaker)
    // {
    //   this.subscriber.setAudioVolume(1); //(silent)
    // }
    // else{
    //   this.subscriber.setAudioVolume(100); 
    // }
    // this.videoToggleVariable=true;
    }
  }

  muteToggle()
  {
    console.log("mute: ", this.mute);

    if(this.mute)
    {
      this.publisher.publishAudio(true);
      this.mute=false;
    }
    else{
      this.publisher.publishAudio(false);
      this.mute=true;
    }

  }

  


  speakerToggle()
  {
    console.log("speaker: ", this.speaker);

   if(this.speaker)
   {
     // After you create a Subscriber object, you can set its volume by 
  //calling its setAudioVolume() method, passing in a value from 0 (silent) to 100 (full volume):

    this.subscriber.setAudioVolume(1); //(silent)
    // this.subscriber.subscribeToAudio(false); // audio off
    this.speaker = false;
   }
   else{
    this.subscriber.setAudioVolume(100);
    // this.subscriber.subscribeToAudio(true); // audio off
    this.speaker = true;
   }
  
  }

   handleError(error) {
    if (error) {
    console.error(error);
    alert(error);
    // this.myCondition=true;

    }
    }
}

// Setting an image to display in audio-only mode

// You can use the backgroundImageURI style of a Subscriber to set the image to be displayed when there is no video. The value you set can be the URL of an image on the web. It can also be a data: URL, such as one that you obtain using the getImgData() method of the Subscriber object (see the previous section).

// The following code sets the background image of the Subscriber. When the call to Session.subscribe() completes successfully, the background image is set. If there is a video stream, the background is set to a static image captured from the subscriber video; otherwise it is set to an image loaded from a web URL:

// var subscriber = session.subscribe(event.stream, 'subscriberElement', function(error) {
//   if (error) {
//     console.log(error.message)'
//     return;
//   }
//   if (subscriber.stream.hasVideo) {
//     var imgData = subscriber.getImgData();
//     subscriber.setStyle('backgroundImageURI', imgData);
//   } else {
//     subscriber.setStyle('backgroundImageURI',
//       'https://tokbox.com/img/styleguide/tb-colors-cream.png'
//     );
//   }
// });

