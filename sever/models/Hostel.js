const mongoose=require(mongoose)
const HostelSchema=new mongoose.Schema({
    email:String,
    hname:String,
    hcapacity:Number,
})
HostelModel=mongoose.model("Hostel",HostelSchema)
mongoose.export = HostelModel