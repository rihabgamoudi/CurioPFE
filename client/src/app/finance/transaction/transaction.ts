import { Payment } from "../payment-method/payment";

export class Transaction {
    constructor(
        public id?: number,
        public name?:string,
        public description?: string,
        public amount?: number,
        public isCompleted?: boolean,
        public isCredit?: boolean,
        public sourceId?: number,
        public ban?: string,
        public checkNumber?: string,
        public checkImage?: string,
        public dueDate?: Date,
        public isOver?: boolean,
        public operationNumber?: number,
        public createAt?: Date ,
        public updateAt?: Date ,
        public isActive?: boolean ,
        public createBy?: number ,
        public updatedBy?: number ,
        public payementId?: Payment,
        
       
      ) {}
    
}
