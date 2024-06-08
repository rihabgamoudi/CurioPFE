import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommandDetail, Commande } from '../../commande';
import { Customer } from 'src/app/customer/customer/customer';
import { CommandeService } from '../../commande.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Product, ProductDetail } from 'src/app/products/products/product';
import { ProductsService } from 'src/app/products/products.service';
import { Transaction } from 'src/app/finance/transaction/transaction';
import { FinanceService } from 'src/app/finance/finance.service';
import { Price } from 'src/app/products/prices/prices';
import { Category } from 'src/app/products/category/category';
import { Mark } from 'src/app/products/marks/mark';
import { Units } from 'src/app/products/units-measures/units';
import { TVA } from 'src/app/products/tva/tva';
import { Payment } from 'src/app/finance/payment-method/payment';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  
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
  commande:Commande= new Commande()
  CommandDetail:CommandDetail= new CommandDetail()
  product:Product=new Product()
  products:Product[]=[]
  transaction:Transaction=new Transaction()
  
  selectedProduct:CommandDetail[]=[]
  selectedTransaction:Transaction[]=[]
  selectedPayment:Transaction[]=[]
 
  productDetail:ProductDetail= new ProductDetail()

  totalPriceHorsTax: number = 0;
  totalPriceTTC: number = 0;
  CommandDetails: CommandDetail[] = [];
  commandDetail: CommandDetail[] = [];
  payment:Payment=new Payment()
 
  
 Transactions:Transaction[]=[]
  resetAmount: number=-1;
  showModalDelete:boolean=false
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService,private productsService:ProductsService,private financeService:FinanceService,private commandeService:CommandeService) {
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
    this.CommandDetail.productId= open.model
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
    this.CommandDetail.quantity = detailQuantity;
    this.CommandDetail.TotalTTC=Number(this.CommandDetail.productId?.priceTTC)*Number(this.CommandDetail.quantity) 
    this.CommandDetails.push(this.CommandDetail);
    this.calculerSumTotaleProduct()
    this.resetAmount=this.somme
    this.CommandDetail = new CommandDetail();
    this.form?.get('Product')?.reset();
  }
  calculerSumTotaleProduct() {
    this.somme = this.CommandDetails.filter(x => x.productId !== undefined).reduce((sum, x) => sum + Number(x.TotalTTC), 0);
}//deleteMultiple valider
  confirmDelete() {
    for (let i = 0; i < (this.selectedProduct).length ;i++) {
      const index = this.CommandDetails.indexOf(this.selectedProduct[i]);
      if (index !== -1) {
        this.CommandDetails.splice(index, 1); 
      }
    }
    this.showProductModal=true;
  }

  getPayment(){
    this.financeService.getAllPayment().subscribe(data=>{
      this.dataPayment=data[0]
   
    })
   }

   paymentSelect(event:any){
    console.log(" list",this.selectedPayment.length)

   }
openChangePayment(open: any) 
{
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
    let totaleTranaction=this.Transactions.filter(x => x.amount !== undefined) .reduce((sum, x) => sum + Number(x.amount), 0);
    this.commande.montantTotal=totaleTranaction
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
  
      
      let CommandDetails = []
      CommandDetails.push(this.CommandDetail)
      this.commande.CommandDetail=this.CommandDetails
      this.commande.transactions=this.Transactions
      this.commande.CustomerId=this.customer

     console.log("this.commande",this.commande)
      this.commandeService.addCommande(this.commande).subscribe(
        data=>{console.log('data',data)
    
   this.show=true  
        } 
      )  }
      reset(){
        this.selected= []; 
        this.disabled=false;
        this.customer = new Customer()
        this.commande= new Commande()
       this.CommandDetail= new CommandDetail()
       this.product=new Product()
  
        this.transaction=new Transaction()
        this.form.reset()
        this.show=false
      }

 }


 