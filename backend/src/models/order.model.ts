import { model, Schema, Types } from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { Food, FoodSchema } from './food.model';

// we don't have leafLet here so we need to create an interface for it
export interface LatLng {
    lat: string;
    lng: string;
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: { type: String, required: true },
        lng: { type: String, required: true },
    }
);

export interface OrderItem {
    food: Food;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food: { type: FoodSchema, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }
);

export interface Order {
    id: string;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    address: string;
    addressLatLng: LatLng
    paymentId: string;
    status: OrderStatus; // an enumeration was defined here 
    user: Types.ObjectId; // this will return only the user id as an foreign key 
    createdAt: Date;
    updatedAt: Date
}

const orderSchema = new Schema<Order>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, default: OrderStatus.NEW },
    user: { type: Schema.Types.ObjectId, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
// again just reminder that with defining the last to option virtuals : true we will have id instead of _id 

// creating order model to save it in mongodb
export const OrderModel = model('order', orderSchema);