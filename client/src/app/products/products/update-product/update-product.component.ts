import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductDetail } from '../product';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Price } from '../../prices/prices';
import { TVA } from '../../tva/tva';
import { Picture } from '../picture';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
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
  form: FormGroup;
  dataAccessoire=[]
  dataCategory=[]
  dataMark=[]
  dataUnits=[]
  dataPrice=[]
  dataTVA=[]
  price  : Price = new Price()
  tva : TVA=new TVA()
  show: boolean=false; 
  name: any;
  product:Product= new Product()
  productDetail:ProductDetail= new ProductDetail()
  id: number=7;

  constructor(private formBuilder: FormBuilder,private productService:ProductsService, private route:ActivatedRoute) {
    this.form = this.formBuilder.group({
      name:this.formBuilder.group({
        productName: ['',Validators.required],
        productDescription: ['',Validators.required],
      }),
      
      categoryMark: this.formBuilder.group({
       categoryName:[''],
       markName:['']
      }),
      accessoireColor: this.formBuilder.group({
        accessoireName: [''],
        detailColor: [''],
      }),
     
      units: this.formBuilder.group({
        unitsName: [''],
       
      }),
      quantity:this.formBuilder.group({
        detailQunatity: [''],
      }),
      price:this.formBuilder.group({
        priceName: [''],
       TTC:[""],
        priceExcludingTax:['']
      }),
      TVA:this.formBuilder.group({
        Tva: [''],
        tvaName:['']
      
      }),
      
      
    });
  }
  ngOnInit(): void {
    this.getAccessoire()
    this.getMarks()
    this.getCategory()
    this.getUnits()
    this.getPrice()
    this.getTva()
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getProductById(this.id)
    });
  
  }
  getProductById(id:number){
    this.productService.findProductsById(id).subscribe(data=>{
      // console.log("dataQuantity",data.productDetail[0].quantity
      // )
      this.form.get('name.productName')?.setValue(data.name);
      this.form.get('name.productDescription')?.setValue(data.description);
      this.form.get('name.productDescription')?.setValue(data.description);
      this.form.get('TVA.Tva')?.setValue(data.productDetail[0].TVAId.value);
      this.form.get('price.priceExcludingTax')?.setValue(data.productDetail[0].priceId.priceExcludingTax);
      this.form.get('price.TTC')?.setValue(data.priceTTC);
      this.form.get('quantity.detailQunatity')?.setValue(data.productDetail[0].quantity);
      // this.form.get('name.productDescription')?.setValue(data.description);

      this.productDetail=data.ProductDetail
      this.form.patchValue(data)
      
      // this.form.patchValue(data)
      
    })
  }
  
  openChange(open: any) {
    this.productDetail.categoryId= open.model.id
    

  }

  openChangeMark(open: any) {
    this.productDetail.markId= open.model.id
  } 

  openChangeAccessoire(open: any) {
    this.productDetail.accessoireId= open.model.id
  }
  openChangeUnits(open: any) {
    this.productDetail.unitsId= open.model.id
  }
openChangePrice(open: any) {
    
    this.price=open.model
    
    this.productDetail.priceId= open.model.id
    this.price.priceTTC=Number(this.price.priceExcludingTax)*Number(this.tva.value)
   
    this.form.get('price.priceExcludingTax')?.setValue(open.model.priceExcludingTax);
    this.form.get('price.TTC')?.setValue( this.price.priceTTC);
}
openChangeTVA(open: any) {
  this.tva = open.model;
  
  // this.productDetail.productTva = open.model.id;
  this.productDetail.TVAId= open.model.id
  this.form.get('TVA.Tva')?.setValue(open.model.value);
}


   getAccessoire(){

    this.productService.getAllAccessoires().subscribe(data=>{
    
      this.dataAccessoire=data[0]
    })
   }
   getCategory(){
    this.productService.getAllCategory().subscribe(data=>{
      
      this.dataCategory=data[0]
    })
   }
   getMarks(){
    this.productService.getAllMarks().subscribe(data=>{
    
      this.dataMark=data[0]
    })
   
   }
   getUnits(){
    this.productService.getAllUnits().subscribe(data=>{
  
      this.dataUnits=data[0]
    })
   }
   getPrice(){
    this.productService.getAllPrices().subscribe(data=>{
   
      this.dataPrice=data[0]
    })

   }
   getTva(){
    this.productService.getAllTva().subscribe(data=>{
    
      this.dataTVA=data[0]
    })

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
    this.id
    const productName = this.form.get('name.productName')?.value;
    const productDescription = this.form.get('name.productDescription')?.value;
    this.product.name = productName;
    this.product.description = productDescription;
    let productDeatils =[]
    productDeatils.push(this.productDetail)
    this.product.productDetail=productDeatils
    // console.log('product', this.product.productDetail)
    const detailColor=this.form.get('accessoireColor.detailColor')?.value;
    this.productDetail.color=detailColor; 
    const detailQunatity=this.form.get('quantity.detailQunatity')?.value;
    this.productDetail.quantity=detailQunatity;
    

    this.productService.editProductsById(this.id,this.product).subscribe(
      
      data=>{ 
        this.pictureArray.forEach(async picture => {
          picture.productId = data.id
          await this.productService.addPicture(picture)
            .subscribe(
              picture => {
                console.log("picture",picture)
                this.showAlert = true;
               console.log("data",data)
              })
     this.show=true  
      } 
    )  
  })
}}
