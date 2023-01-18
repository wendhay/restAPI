import mongoose from 'mongoose'

export const MemberSchema = new mongoose.Schema(
    {
        id: { type: String, required: true , unique: true },
        fullname:  { type: String, required: true},
        address: { type: String, required: true },
        age: { type: Number, required: true},
        sex: { type: String, required: true},
        mobileNo: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},

    },
    { timestamp: true}
)

const Member = mongoose.model('Member', MemberSchema)
export default Member
