import { Component, OnInit  } from '@angular/core';
import { Http,Response,Headers }    from '@angular/http';
import { HttpClient } from '@angular/common/http';
import{UserBlogModel} from "../Models/UserResponse";
import { FileUploadComponent } from '../file-upload/file-upload.component';


@Component({
  selector: 'app-user-blog',
  templateUrl: './user-blog.component.html',
  styleUrls: ['./user-blog.component.css']
})
export class UserBlogComponent implements OnInit   {

  selectedFiles :string[]=[];
    
  updateVideos(files){
    console.log('updateFromChild', event)
    
    for(let file of files){
      this.videos.push(file);
      console.log("File", file);
      
    }

    console.log('New Video Array' , this.videos)
  }

  updateImages(files){
    console.log('updateFromChild', event)
    for(let file of files){
      this.images.push(file);
      console.log("File", file);
      
    } 
    console.log('New Image Array' , this.images) 
    
  }

  constructor(private http: Http) { }


  images = [ ]                 //Object reference
  
  videos =[ ]                   //Object reference
  
  title=""
  postid=""
  userid=""
  desc=""
  author=""
  visible=""
  moderated=""
  dispimg=""
  coverimg=""
  reference=[]
  projname=""
  projid=""
  type=""
  subtype=""
  priority=""
  
  private headers = new Headers({ 'Content-Type': 'application/json'});
  userblogResponse: UserBlogModel
  IP_ADDRESS = "http://api.development.com/"
  
  //data=[]
  addImage()
  {
       this.images.push({
      "src": ""
      })
  }

removeImage()
  {
     if(this.images.length <2)
     return
     this.images.pop()// -=1
 }

 addVideo()
 {
       this.videos.push (
         {
           "src": ""
          }
        )
}

removeVideo(){
if(this.videos.length < 2)
return
this.videos.pop()

}

getData= function() 
{
 
   let Imgs =  this.images                               //To convert my data into array of string format

   
   let Videos = this.videos                            //To convert my data into array of string format


        console.log("Videos",Videos, this.videos)
        console.log("Images", Imgs, this.images)
        
      this.http.post(this.IP_ADDRESS+"api/v1/posts",
                          {
                            "title": this.title,
                            "images": this.images,
                            "videos": this.videos,
                            "postid":this.postid,
                            "userid" : this.userid,
                            "desc" : this.desc,
                            "author" : this.author ,
                            "visible" : this.visible, 
                            "moderated" : this.moderated,
                            "dispimg" : this.dispimg ,
                            "coverimg" : this.coverimg, 
                            "reference" : this.reference, 
                            "projname" : this.projname ,
                            "projid" :this.projid ,
                            "type" : this.type ,
                            "subtype" : this.subtype, 
                            "priority" : this.priority
                          } 

      ).subscribe(                  
        (res:Response)=> 
              {
                this.userblogResponse= new UserBlogModel( res.json() ) ;
                console.log( "DEBUG_NETWORK_REQ",  res.json());
                alert("Get Data Call");
                //alert ("Status "+ this.userblogResponse.status +"Message" + this.userblogResponse.message );
               // alert (res.json );
               alert(JSON.stringify(res.json));
              }          
            )
  }
  
  ngOnInit() {
  }

}


