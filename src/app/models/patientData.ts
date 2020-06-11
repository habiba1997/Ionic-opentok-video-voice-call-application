
export class patientData{

      patientId: number;
      name: string;
      fcmtoken:string;
      age:number;
      address: string;
      mobile: string;
      relationid: number;
      user_image:string;
      constructor(patientId?: number,
        name?: string,
        fcmtoken?: string,
        mobile?: string,
        age?:number,
        address?:string,
        relationid?: number, user_image?:string)
      {
        this.patientId= patientId;
        this.name= name;
        this.fcmtoken= fcmtoken;
        this.mobile= mobile;
        this.age= age;
        this.relationid= relationid;
        this.address = address;
        this.user_image = user_image;
      }
  }  