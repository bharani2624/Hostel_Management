const mongoose = require("mongoose")
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roomNumber:Number
})
StudentSchema.pre('save', async function(next) {
    const student = this;
    if (!student.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        student.password = await bcrypt.hash(student.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});
StudentModel = mongoose.model("students", StudentSchema)

module.exports = StudentModel