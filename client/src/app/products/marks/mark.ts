import { Picture } from "../products/picture";

export class Mark {
    public id?: number ;
    public name?:string;
    public description?:string;
    public status?: string ;
    public picture?: string ;
    public createAt?: Date ;
    public updateAt?: Date ;
    public isActive?: boolean ;
    public createBy?: number ;
    public updatedBy?: number ;
    public pictures?: Picture[];
   
}
