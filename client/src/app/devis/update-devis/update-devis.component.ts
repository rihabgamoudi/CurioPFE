import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/customer/customer/customer';
import { Devis, deviceDetail } from '../devis';
import { Product, ProductDetail } from 'src/app/products/products/product';
import { Transaction } from 'src/app/finance/transaction/transaction';
import { Payment } from 'src/app/finance/payment-method/payment';
import { CustomerService } from 'src/app/customer/customer.service';
import { ProductsService } from 'src/app/products/products.service';
import { FinanceService } from 'src/app/finance/finance.service';
import { DevisService } from '../devis.service';
import { CommandDetail } from 'src/app/commande/commande';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-devis',
  templateUrl: './update-devis.component.html',
  styleUrls: ['./update-devis.component.css']
})
export class UpdateDevisComponent {
  form: FormGroup;
  dataCustomer=[]
  dataProduct=[]
  dataPayment=[]
  showModal: boolean=false; 
  show: boolean=false; 
  showProductModal: boolean=false;
  name: any;
  data:any
  number: any;
  somme:number=0
  
  selected: any[] = []; 
  disabled: boolean=false;
  customer: Customer = new Customer()
  devis:Devis= new Devis()
  DevisDetail:deviceDetail= new deviceDetail()
  product:Product=new Product()
  products:Product[]=[]
  transaction:Transaction=new Transaction()
  
  selectedProduct:deviceDetail[]=[]
  selectedTransaction:Transaction[]=[]
  selectedPayment:Transaction[]=[]
 
  productDetail:ProductDetail= new ProductDetail()

  totalPriceHorsTax: number = 0;
  totalPriceTTC: number = 0;
  devisDetails: deviceDetail[] = [];
  deviDetail: deviceDetail[] = [];
  payment:Payment=new Payment()
 
  
 Transactions:Transaction[]=[]
  resetAmount: number=-1;
  showModalDelete:boolean=false
  id: number=0;
  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,private customerService:CustomerService,private productsService:ProductsService,private financeService:FinanceService,private devisService:DevisService) {
    this.form = this.formBuilder.group({

      customer: this.formBuilder.group({
       customerName:[''],
       
      }),
      Product: this.formBuilder.group({
        productName: [''],
        detailQunatity: [''],
        totalMontant:['']
      }),
     
      transaction: this.formBuilder.group({
        transactionName: [''],
        total:[''],
        facilitatedBy:[''],
        transactionPrice:['']
      }),
      commande: this.formBuilder.group({
        commandeName: [''],
       
      }),
    
      
    });
  }
  ngOnInit(): void {
    this.getCustomer()
    this. getProduct() 
    
   
    this.getPayment()
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCommandeById(this.id)
    });
  
  }
  getCommandeById(id:number){
    this.devisService.findDevisById(id).subscribe(data=>{
      console.log(data)
      this.customer=data.CustomerId
      this.devisDetails=data.deviceDetail
      this.transaction=data.transactions
      // this.form.patchValue(data)
      
    })
  }
  
    
  closeAction(){
    this.show=false
  }
 
  openChange(open: any) {
  
    this.customer= open .model 
  }
  getCustomer(){
    this.customerService.getAllCustomer().subscribe(data=>{
      this.dataCustomer=data[0]
   
    })
    
   }
   getProduct(){
      this.productsService.getAllProducts().subscribe(data=>{
        
        this.dataProduct=data[0]
      })
     }
     productSelect(event:any){
      console.log(" list",this.selectedProduct.length)
      this.selectedProduct = event;
     
    }
  
 
  openChangeProduct(open: any) {
   this. totalPriceHorsTax = 0;
    this. totalPriceTTC = 0;
    this.DevisDetail.productId= open.model
    const index = this.products.findIndex(product => product.id === open.model.id);
    if (index !== -1) {
      this.products[index] = open.model;
    } else {
     this.products.push(open.model);
    }
    
    this.product= open.model
   

    this.product.priceHorsTax=Number(this.product.priceHorsTax)
  
    this.form.get('this.product')?.setValue( this.product.priceHorsTax);
    this.form.get('this.product')?.setValue( this.product.priceTTC);
   

    for (const product of this.products) {
      // Vérifiez si priceHorsTax et priceTTC sont définis et sont des nombres
      if (typeof product.priceHorsTax === 'number' && typeof product.priceTTC === 'number') {
          // Ajoutez les valeurs de priceHorsTax et priceTTC aux sommes totales
         this. totalPriceHorsTax += product.priceHorsTax;
         this. totalPriceTTC += product.priceTTC;
      }
      
      
  }

    this.form.patchValue({
      
      Product: {
      
        detailQunatity: ''
      }
    }); 
  }
   
  //valide Function add product
  AddProductCommande(){
    const detailQuantity = this.form.value?.Product?.detailQunatity;
    this.DevisDetail.quantity = detailQuantity;
    this.DevisDetail.TotalTTC=Number(this.DevisDetail.productId?.priceTTC)*Number(this.DevisDetail.quantity) 

    this.devisDetails.push(this.DevisDetail);
    this.calculerSumTotaleProduct()
    this.resetAmount=this.somme
    this.DevisDetail = new CommandDetail();
    this.form?.get('Product')?.reset();
  }
  
  calculerSumTotaleProduct() {
    this.somme = this.devisDetails.filter(x => x.productId !== undefined).reduce((sum, x) => sum + Number(x.TotalTTC), 0);
}//deleteMultiple valider
  confirmDelete() {
    for (let i = 0; i < (this.selectedProduct).length ;i++) {
      const index = this.devisDetails.indexOf(this.selectedProduct[i]);
      if (index !== -1) {
        this.devisDetails.splice(index, 1); 
      }
    }
    this.showProductModal=false
  }

  getPayment(){
    this.financeService.getAllPayment().subscribe(data=>{
      this.dataPayment=data[0]
   
    })
   }

   paymentSelect(event:any){
    console.log(" list",this.selectedPayment.length)

   }
openChangePayment(open: any) {
    this.payment = open.model;
   this. updateTransactionPrice()
  
   } 
   AddTransactionCommande(){
    this.transaction.payementId = this.payment;
    this.transaction.amount=Number(this.form.get('transaction.transactionPrice')?.value)
    this.Transactions.push(this.transaction);
   this.transaction=new Transaction()
   this.verifierAmount()
  this.form?.get('transaction')?.reset();
  }
  
   updateTransactionPrice() {
    const selectedOption = this.form.get('transaction.total')?.value;
    if (selectedOption === 'option1') {
      
      this.form.get('transaction.transactionPrice')?.setValue(this.somme);
    }
    else {

      this.form.get('transaction.transactionPrice')?.setValue("null");
    }
    
  }
 
  verifierAmount(){
    let totaleTranaction=this.Transactions.filter(x => x.amount !== undefined)
    .reduce((sum, x) => sum + Number(x.amount), 0);
   
    this.resetAmount=this.somme-totaleTranaction
  }
   
  
   confirmDeleteTransaction() {
    for (let i = 0; i < this.selectedPayment.length; i++) {
      const index = this.Transactions.indexOf(this.selectedPayment[i]);
      if (index !== -1) {
        this.Transactions.splice(index, 1); 
      }
    }
    this.showModalDelete=false
  }
 
   submit(){ 
    this.id
       
      let devisDetails = []
      devisDetails.push(this.DevisDetail)
      this.devis.deviceDetail=this.devisDetails
      this.devis.transactions=this.Transactions
      this.devis.CustomerId=this.customer
      console.log("this.devis",this.devis)
      this.devisService.editDevisById( this.id,this.devis).subscribe(
      data=>{console.log('data',data)
    
     this.show=true  
        } 
      )  }
}
