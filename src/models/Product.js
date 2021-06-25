import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number, 
    quantity: Number,
    imgUrl: String  
}, {
    timestamps: true,
    versionkey: false
})

export default model('Product', productSchema);