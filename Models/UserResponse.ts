
export class LoginResponseModel{
    message: String;
    status: boolean;
    constructor(data)
    {
  
      this.message = data.message;
      this.status = data.status
  
    }
  }
export class SignUpResponseModel
{
    message: String;
    status: boolean;
    constructor(data)
    {
  
      this.message = data.message;
      this.status = data.status
     }
}

export class DashboardResponseModel
{
   public  message: String;
   public  status: boolean;
   public  details:UserDataModel

    constructor(data)
    {
  
      this.message = data.message;
      this.status = data.status;
      this.details= new UserDataModel( data.details )
     }

}



export class UserDataModel
{
    username: String;
    pas: boolean;
    email:string;
    gender:string;
    DOC:string;
    DOM:string;

constructor(data)
    {
  
      this.username = data.username;
      this.pas = data.pas;
      this.email=data.email;
      this.gender=data.gender;
      this.DOC = data.DOC;
      this.DOM = data.DOM;
     }
    }