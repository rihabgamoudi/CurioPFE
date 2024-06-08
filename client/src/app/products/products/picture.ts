import { Mark } from "../marks/mark"
import { Product } from "./product"

export class Picture {
    id?: number
    url?: string | null
    cloudinaryId?: string | null
    defaults?: boolean | null
    createdAt?: Date | null
    updatedAt?: Date | null
    createdBy?: number | null
    updatedBy?: number | null
    active?: boolean | null
    productId? :Product| number
    markId?:Mark| number

}
 