import { Customer } from "../customer/customer/customer";
import { Transaction } from "../finance/transaction/transaction";
import { Product } from "../products/products/product";

export class Devis {
    public id?: number ;
    public createAt?: Date ;
    public updateAt?: Date ;
    public isActive?: boolean ;
    public createBy?: number ;
    public updatedBy?: number ;
    public commandId?: number ;
    public CustomerId?: Customer;
    public transactions?:  Transaction [];
    public deviceDetail?:deviceDetail[];
    
}
export class deviceDetail{
    public id?: number;
    public createAt?:Date;
    public updateAt?:Date;
    public createBy?:number;
    public updatedBy?:number;
    public isActive?:boolean
    public productId?: Product;
    public quantity?:number;
    public TotalTTC?:number;
}
