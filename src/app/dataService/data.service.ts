import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
 
  appointments;



  patients=[
    {
      "address": "",
      "age": 0,
      "fcmtoken": "ce1hIn_cqL8:APA91bGP169bi8b2dmi9qZ__8UJnXi8lkaEGhOhPanE6yFIaPNEoW9TEiH6uJMhf_7Ll3XnS6tNpPqkmKkxcZzQwzWsAjJZs4cdtFsFUQ5PSfyQXreS4rrVv5VooOApMo-6Mc9U23zdp",
      "mobile": "+20123456778",
      "name": "hfmss",
      "patientId": 71,
      "relationid": 49,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+201033466181",
      "name": "Change Your Data",
      "patientId": 72,
      "relationid": 50,
      "user_image": null
    },
    {
      "address": "cairo",
      "age": 22,
      "fcmtoken": "e156unAxrqI:APA91bGh2VFmhZDuBUTAU5EwOL-fg8bdCGElMBJM0DOJWFxAq-XKebiepFCCiCJ9-4rIePyGPq9tcjXLBC8C45vx2Ac4VFtAn_JHyTvTmwVtvNgoP6WYCKmljzIOuGCjWpt6_RElBNYG",
      "mobile": "+20116228616",
      "name": "habiba",
      "patientId": 73,
      "relationid": 51,
      "user_image": null
    },
    {
      "address": "cairo",
      "age": 23,
      "fcmtoken": "egUA8fQzMVg:APA91bHLiIwe1fK3EnqeMDszbbS5wg6XaXduechmFwsbeNQrWXGNOcz3ZXLTQ3KYNzfkMOoPFHkz3FMfwPIbAMkYa0Xa4zptsGUlkTW-oh_MlkYt_cqzbLHomRhqgI05RBAkDqXbGRgK",
      "mobile": "+201234560",
      "name": "sohaila mohamed",
      "patientId": 56,
      "relationid": 52,
      "user_image": "https://s3.ap-south-1.amazonaws.com/fortifyfitness/1591463254325-blob"
    },
    {
      "address": "manyal",
      "age": 23,
      "fcmtoken": "e156unAxrqI:APA91bGh2VFmhZDuBUTAU5EwOL-fg8bdCGElMBJM0DOJWFxAq-XKebiepFCCiCJ9-4rIePyGPq9tcjXLBC8C45vx2Ac4VFtAn_JHyTvTmwVtvNgoP6WYCKmljzIOuGCjWpt6_RElBNYG",
      "mobile": "+201151280908",
      "name": "habiba shara",
      "patientId": 31,
      "relationid": 53,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20",
      "name": "Change Your Data",
      "patientId": 74,
      "relationid": 71,
      "user_image": null
    },
    {
      "address": "cairo",
      "age": 23,
      "fcmtoken": "egUA8fQzMVg:APA91bHLiIwe1fK3EnqeMDszbbS5wg6XaXduechmFwsbeNQrWXGNOcz3ZXLTQ3KYNzfkMOoPFHkz3FMfwPIbAMkYa0Xa4zptsGUlkTW-oh_MlkYt_cqzbLHomRhqgI05RBAkDqXbGRgK",
      "mobile": "+201234560",
      "name": "sohaila mohamed",
      "patientId": 56,
      "relationid": 72,
      "user_image": "https://s3.ap-south-1.amazonaws.com/fortifyfitness/1591463254325-blob"
    },
    {
      "address": "cairo",
      "age": 23,
      "fcmtoken": "egUA8fQzMVg:APA91bHLiIwe1fK3EnqeMDszbbS5wg6XaXduechmFwsbeNQrWXGNOcz3ZXLTQ3KYNzfkMOoPFHkz3FMfwPIbAMkYa0Xa4zptsGUlkTW-oh_MlkYt_cqzbLHomRhqgI05RBAkDqXbGRgK",
      "mobile": "+201234560",
      "name": "sohaila mohamed",
      "patientId": 56,
      "relationid": 73,
      "user_image": "https://s3.ap-south-1.amazonaws.com/fortifyfitness/1591463254325-blob"
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20497235",
      "name": "Change Your Data",
      "patientId": 75,
      "relationid": 74,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+2012345670",
      "name": "Change Your Data",
      "patientId": 57,
      "relationid": 75,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20123456780",
      "name": "Change Your Data",
      "patientId": 76,
      "relationid": 76,
      "user_image": null
    },
    {
      "address": "Cairo Uni",
      "age": 56,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20123457080",
      "name": "Patient",
      "patientId": 77,
      "relationid": 77,
      "user_image": null
    },
    {
      "address": "manial",
      "age": 33,
      "fcmtoken": "bgrb",
      "mobile": "+2012345678900",
      "name": "patientTrial Signup",
      "patientId": 78,
      "relationid": 78,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+2011512328486",
      "name": "Change Your Data",
      "patientId": 79,
      "relationid": 79,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20",
      "name": "Change Your Data",
      "patientId": 74,
      "relationid": 80,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20143264",
      "name": "Change Your Data",
      "patientId": 82,
      "relationid": 81,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+201243534",
      "name": "Change Your Data",
      "patientId": 83,
      "relationid": 82,
      "user_image": null
    },
    {
      "address": "",
      "age": 0,
      "fcmtoken": "NOT YET DEFINED",
      "mobile": "+20",
      "name": "Change Your Data",
      "patientId": 74,
      "relationid": 83,
      "user_image": null
    }
  ];
}
