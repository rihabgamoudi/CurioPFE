import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Mark } from '../mark';
import { Picture } from '../../products/picture';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent implements OnInit {
  pictureArray: Picture[] = [];
  allpicture: Picture = new Picture();
  pictureString: Picture = new Picture();
  filename: string='';
  pictureIndex: number = -1;
  desableDefCheck: boolean=false;
  isPictureChecked: boolean=false;
  pictureDetails: boolean=false;
  untouched: boolean = true;
  filesize: number=0;
  loading: boolean = false;
  saisie: string='';
  tailleInvalid: boolean=false;
  alert:string=''
  PrincipalCheck:boolean=false
  showError: boolean=false;
  errorMessage: string='';
  showAlert: boolean=false;
  markForm: FormGroup 
  show: boolean=false; 
  name: any;
  disabled: boolean=false;
  mark:Mark= new Mark()
  constructor(private formBuilder: FormBuilder,private productsService:ProductsService) { 
    this.markForm = this.formBuilder.group({
      name: ["", Validators.required,Validators.pattern(/^[A-Z]+$/)],
      description: [""], 
      status: ["", Validators.required],
      image:["", ],
      
    });
  }
  ngOnInit(): void {
    this.show=false;
  } 
  closeAction(){
    this.show=false
  }

  picked(event:any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.filename = file.name;
      this.filesize = file.size;
      if (this.filesize > 100000) {
        this.tailleInvalid = true;
        return
      }
      this.tailleInvalid = false;
      this.handleInputChange(file);
    }
    else {
      alert("No file selected");
    }
  }
  
  handleInputChange(files:File) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.alert = "format d'image invalide "
      // { type: 'danger', message: "format d'image invalide " };
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  async _handleReaderLoaded(e:any) {
    let allpicture: Picture = new Picture()
    allpicture.url = await e.target.result;
    allpicture.defaults = await false
    await this.pictureArray.push(allpicture)
    console.log(' this.pictureArray', this.pictureArray)
    const found = await this.pictureArray.filter(item => item.defaults === true);
    if (found.length == 0) {
      this.pictureArray[0].defaults = await true
    }
    this.desableDefCheck = false
  }
  
  async deletePicAction(item:any) {
    var pos = await this.pictureArray.indexOf(item);
    await this.pictureArray.splice(pos, 1);
    if (item.defaults == true) {
      this.pictureArray[0].defaults = await true
    }
  }
  submit(){ 

    this.productsService.addMark(this.markForm.value).subscribe(
      data=>{ 
        this.name= this.markForm.value['name']
        this.pictureArray.forEach(async picture => {
          picture.markId = data.id
          await this.productsService.addPicture(picture)
            .subscribe(
              picture => {
                console.log("picture",picture)
                this.showAlert = true;
               console.log("data",data)
              })
     this.show=true  
      } 
    )  
  }) }
    reset(){
    
      this.disabled=false;
     
      this.mark= new Mark()
      this.markForm.reset()
      this.show=false
    }
} 

