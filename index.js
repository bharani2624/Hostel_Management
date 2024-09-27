const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const StudentModel = require("./models/Students")
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/student")

app.listen(3001, () => {
    console.log("ABD STARTED TO CONQUER THE WORLD")
})


app.post("/register", (request, response) => {
    const { email } = request.body
    StudentModel.findOne({ email: email })

        .then(existing => {
            if (existing) {
                response.json("Account Already Existing")
            }
            else {
                StudentModel.create(request.body)

                    .then(NewStudent => { (response.json(NewStudent)) })

                    .catch(err => (response.json(err)))
            }
        }
        )

        .catch(err => { response.json(err) })
}

)
app.post('/login',async (req,res)=>
    {
        const {email,}=req.body;

    })

app.put("/room_booking", async (req, res) => {
    const { id, room } = req.body;

    try {
        const student = await StudentModel.findById({_id:id});
        if (student.roomNumber !== room) {
            student.roomNumber = room;
            await student.save();
            return res.json("Success");
        } else {
            return res.json("Invalid");
        }
    } catch (err) {
        console.log(err);
        return res.json("Ivalid");
    }
});
