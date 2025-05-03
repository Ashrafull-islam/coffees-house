// models/Coffee.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICoffee extends Document {
  name:string;
  chef:string;
  supplier:string;
  taste:string;
  category:string;
  details:string;
  photo:string;
}

const CoffeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  chef: { type: String, required: true },
  supplier: { type: String, required: true },
  taste: { type: String, required: true },
  category: { type: String, required: true },
  details: { type: String, required: true },
  photo: { type: String, required: true },
});

export default mongoose.models.Coffee || mongoose.model<ICoffee>('Coffee', CoffeeSchema);
