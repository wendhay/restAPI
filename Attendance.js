import Attendance from '../models/Attendance.js'

export const getAttendances = async (req, res) => {
    try {
        const attendances = await Attendance
        .find({ memberId: req.params.memeberId })
        .populate('memberid')
        .select('presents absences memberid')
        if (attendance.length !== 0)
            res.status(200).json(attendance)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getAttendance = async (req, res) => {
    try {
        const { id } = req.params
        const attendance = await Attendance.findById(id)
        .populate('memberId')
        .select('presents absences memberId')
        if (attendance)
            res.status(200).json(curriculum)
        else
            res.status(404).json({ error: 'resource not found'})
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const addAttendance = async (req, res) => {
    try {
        const { presents, absences} = req.body
        const memberId = req.params.memberId
        const newAttendance = await Attendance.create({
            presents,
            absences,
            memberId
        })
        const savedAttendance = await newAttendance.save()
        res.status(201).json({ id: savedAttendance._id })
    } catch (err) {
    res.status(500).json({ error: err.message})
    }   
}

export const deleteAttendance = async (req, res) => {
    try {
        await Attendance.deleteOne({
            memberId: req.params.memberId,
            _id: req.params.id
        })
        res.status(204).send()
    } catch (err) {
    res.status(404).json({ error: err.message})
    }
}

export const updateAttendance = async (req, res) => {
    try {
        const filter = {
            memberId: req.params.memberId,
            _id: req.params.id
        }
        const { presents, absences} = req.body
        const update = {
            presents: presents,
            absences: absences
        }
        await Attendance.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}
