const express = require("express");
const urlRoute = require("./routes/url");
const { connectDB } = require("./connect"); // Import the connectDB function
const URL = require("./models/url")
const app = express();
const PORT = 5001;
const path=require('path')
const staticrouter=require("./routes/staticrouter")

connectDB(`mongodb://127.0.0.1:27017/short-url`)
  .then(() => console.log("Krishna! MongoDB Connected"))
   // Handle connection errors

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/",staticrouter);

app.use("/url", urlRoute);



app.get("/url/:shortId",async (req, res)=>{
  const shortId=req.params.shortId;
  const entry =await URL.findOneAndUpdate({
    shortId
  },{
    $push:{
    visitHistory: {
      timestamp:Date.now(),
    }
  },
}
);
res.redirect(entry.redirectURL)
});

app.listen(PORT, () => console.log(`Server Started at:${PORT} `));
