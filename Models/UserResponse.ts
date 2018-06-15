
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
      this.details= new UserDataModel( data.details )             //just to define (or specify ) the properties of the model
     }

}

export class UserDataModel
{
    username: String;
    pas: boolean;
    email:string;
    gender:string;
    //DOC:string;
    // DOM:string;

constructor(data)
    {
  
      this.username = data.username;
      this.pas = data.pas;
      this.email=data.email;
      this.gender=data.gender;
      //this.DOC = data.DOC;
      //this.DOM = data.DOM;
     }
    }



    export class UserBlogModel
    {
       title :String;
       desc : String;
       postid:Number;
       image:String[];
       video:String[];
       author:String;    
       visible:Boolean;
       moderated:Boolean;
       coverimg:String;
       dispimg:String;
       reference:String[];
       projname:String;
       projid:Number;
       userid:Number;
       type:String;
       subtype:String;
       priority:String;

    
    constructor(info)
        {
          this.title = info.title;
          this.desc = info.desc;
          this.postid=info.postid;
          this.image=info.image;
          this.video = info.video;
          this.author = info.author;
          this.visible = info.visible;
          this.moderated = info.moderated;
          this.coverimg = info.coverimg;
          this.dispimg = info.dispimg;
          this.reference = info.reference;
          this.projname = info.projname; 
          this.projid = info.projid;
          this.userid = info.userid;
          this.type = info.type;
          this.subtype = info.subtype;
          this.priority=info.priority;
        
         }
        }

export class DisplayResponseModel
{
//  public  message: String;
//  public  status: boolean;
        public  details:UserBlogModel[];

          constructor(info)
              {

              // this.message = info.message;
                // this.status = info.status;
                this.details= [ ];          //just to define (or specify ) the properties of the model
                
              }

}