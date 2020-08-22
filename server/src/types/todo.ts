import { Document } from "mongoose"

export interface TypeTodo extends Document {
    name: string 
    description: string 
    status: boolean 
}