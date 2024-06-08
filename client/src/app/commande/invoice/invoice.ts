import { Customer } from "src/app/customer/customer/customer";
import { Transaction } from "src/app/finance/transaction/transaction";
import { Product } from "src/app/products/products/product";
import { Commande } from "../commande";

export class Invoice {
    public id?: number ;
    public totalPrice?:number;
    public createAt?: Date ;
    public updateAt?: Date ;
    public isActive?: boolean ;
    public isDeleted?: boolean ;
    public createBy?: number ;
    public updatedBy?: number ;
    public commandId?:Commande[]  
    public CustomerId?: Customer;
    public transactions?:  Transaction [];
    
} 

 




