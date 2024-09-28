const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const StudentModel = require("./models/Students")
const bcrypt = require('bcryptjs');
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
app.post('/log',async (req,res)=>
    {
        const {email,password}=req.body;
        try{
            const usermail= await StudentModel.findOne({email:email});
            res.json(usermail.password)
            if(usermail)
                {
                    const isMatch=await bcrypt.compare(password,usermail.password)
                    if(isMatch)
                    {
                        res.status(200).json({message:"success"});
                    }
                    else
                        res.status(400).json({message:"Invalid Credentials"});
                }
                else
                {
                    res.status(404).json({message:"Email Not Found"});
                }
        }
        catch(err)
        {
            res.status(500).json({message:"Error:",err})
        }

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
