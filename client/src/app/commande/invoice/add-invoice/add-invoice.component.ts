import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/customer/customer';
import { Devis, deviceDetail } from 'src/app/devis/devis';
import { DevisService } from 'src/app/devis/devis.service';
import { FinanceService } from 'src/app/finance/finance.service';
import { Payment } from 'src/app/finance/payment-method/payment';
import { Transaction } from 'src/app/finance/transaction/transaction';
import { ProductsService } from 'src/app/products/products.service';
import { Product, ProductDetail } from 'src/app/products/products/product';
import { CommandDetail, Commande } from '../../commande';
import { CommandeService } from '../../commande.service';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent  {
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
  invoice:Invoice= new Invoice()

  product:Product=new Product()
  products:Product[]=[]
  transaction:Transaction=new Transaction()
  
  selectedProduct:CommandDetail[]=[]
  selectedTransaction:Transaction[]=[]
  selectedPayment:Transaction[]=[]
 
  productDetail:ProductDetail= new ProductDetail()

  totalPriceHorsTax: number = 0;
  totalPriceTTC: number = 0;


 
  
 Transactions:Transaction[]=[]
  resetAmount: number=-1;
  showModalDelete:boolean=false
  constructor(private formBuilder: FormBuilder,private customerService:CustomerService,private productsService:ProductsService,private financeService:FinanceService,private commandeService:CommandeService,private invoiceService:InvoiceService) {
    this.form = this.formBuilder.group({

      customer: this.formBuilder.group({
       customerName:[''],
       
      }),
      Order: this.formBuilder.group({
        OrderName: [''],
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
    this.show=false;

    
  }
  
    
  closeAction(){
    this.show=false
  }
 
  openChange(open: any) {
  
    this.customer= open  
  }
  getCustomer(){
    this.customerService.getAllCustomer().subscribe(data=>{
      this.dataCustomer=data[0]
   
    })
    
   }
   submit(){ 
    this.invoice.transactions=this.Transactions
    this.invoice.CustomerId=this.customer

   console.log("this.commande",this.invoice)
    this.invoiceService.addInvoice(this.invoice).subscribe(
      data=>{console.log('data',data)
  
 this.show=true  
      } 
    )  }
}
