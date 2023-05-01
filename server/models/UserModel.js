import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    avatar: {type: String, required: false, default: 'f98c1a23-86fb-4a30-9ba7-88655796e4a3.jpeg'},
    roles: [{type: String, ref: "Role"}],
    contactInfo: {
        location: {
            textLine: {type: String, required: false},
            coordinates: {type: Array, required: false},
            full: {type: Array, required: false}
        },
        phoneNumber: {type: String, required: false, default: ''},
    },
    reviews: {
        toMe: {
            rate: {type: Number, required: false, default: 0},
            reviewsList: {type: Array, required: false, default: []},
        },
        others: {type: Array, required: false, default: []}
    },
    ads: {type: Array, required: false, default: []},
    favorites: {type: Array, required: false, default: []},
    cart: {type: Array, required: false, default: []},
    dialogues: {type: Array, required: false, default: []},
    wallet: {type: Number, required: false, default: 0},
    isActivated: {type: Boolean, required: false, default: false},
    activationLink: {type: String, required: true},
    followers: {type: Array, required: false, default: []},
    follow: {type: Array, required: false, default: []},
    notifications: {type: Array, required: false, default: []},
},
{
    timestamps: true,
})

export default mongoose.model("User", UserSchema);