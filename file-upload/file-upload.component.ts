import { Component, OnInit, AfterViewChecked , Input,Output, EventEmitter } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
// import { url } from 'inspector';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit , AfterViewChecked  {
                          
                                          //INPUT PROPERTY
  public  VIDEO="video"
  public IMAGE="image"

  @Input('type')
  fileType : String 

  selectedFiles:File[]=[];

  fileTypeToAccept = ""

  fileTypeToAcceptImages = ".jpg, .jpeg, .png";
  fileTypeToAcceptVideos = ".mp4, .gif";
  
  onFileSelected(event)
  {
    console.log('onFileSlected', event.target.files)
    this.selectedFiles=<File[]>event.target.files;
  }

                                      //OUTPUT PROPERTY

  @Output("fileUploaded")
  changes: EventEmitter<string> = new EventEmitter<string>();
  
  appendfiles(files) {
    console.log('Value', this.selectedFiles)
    this.selectedFiles;
    this.changes.emit(files);
  }

  constructor(private http: HttpClient ){  }

  IP_ADDRESS = "http://api.development.com"

 onUploadFile()
{
  const fd=new FormData();
  for(let selectedFile of this.selectedFiles)
  fd.append('file',selectedFile,selectedFile.name)                     //yha pe change hoga

  console.log('FILES', fd)
  this.http.post(this.IP_ADDRESS+'/upload',fd).subscribe(res=>{

        this.appendfiles(res['data']);                 //this.appendfiles(res['data']); // or this.appendfiles(this.IP_ADDRESS+res['data']);
  } );

}

ngOnInit (){

}


ngAfterViewChecked() 
  {
    console.log(this.fileType)
    if(this.fileType == this.IMAGE){
     this.fileTypeToAccept = this.fileTypeToAcceptImages
    } else{

      this.fileTypeToAccept = this.fileTypeToAcceptVideos
    }
   }

}


