import mongoose from 'mongoose'
import { MemberSchema } from './Member.js'

const AttendanceSchema = new mongoose.Schema(
    {
        Present: { type: String , required: true },
        Absent:  { type: String, required: true},
        memberID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Member',
            required: true
        },
        members: [MemberSchema]
    },   
    { timestamp: true}
)

const Attendance = mongoose.model('Attendance', AttendanceSchema)
export default Attendance
