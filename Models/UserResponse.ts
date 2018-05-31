
export class LoginResponseModel{
    message: String;
    status: String;
    constructor(data)
    {
  
      this.message = data.message;
      this.status = data.status
  
    }
  }
export class SignUpResponseModel
{
    message: String;
    status: String;
    constructor(data)
    {
  
      this.message = data.message;
      this.status = data.status
     }
}