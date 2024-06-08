import { Customer } from "../customer/customer/customer";
import { Payment } from "../finance/payment-method/payment";
import { Transaction } from "../finance/transaction/transaction";

import { Product } from "../products/products/product";
import { TVA } from "../products/tva/tva";


export class Commande {
    public id?: number ;
    public createAt?: Date ;
    public updateAt?: Date ;
    public isActive?: boolean ;
    public createBy?: number ;
    public updatedBy?: number ;
    public CommandDetail?:CommandDetail[]  
    public CustomerId?: Customer;
    public transactions?:  Transaction [];
    public payementId?: Payment;
    public montantTotal?:number;
    public isValid?: boolean ;
} 

 
export class CommandDetail{
    public id?: number;
    public createAt?:Date;
    public updateAt?:Date;
    public createBy?:number;
    public updatedBy?:number;
    public isActive?:boolean
    public quantity?:number;
    public TotalTTC?:number;
   
    public TVAId?:number| TVA;
    public productId?: Product;

}
