require('dotenv').config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const express = require('express');
const wrapAsync = require("./util/wrapAsync");

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL} = process.env;

const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const AuthController = require("./Controllers/AuthController");

const PORT = process.env.PORT || 4001;
const url = process.env.MONGO_URL;
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
} 


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(url);
// const mongoURL = "mongodb+srv://adityaZerodha:Zerodha100@zerodhaclonecluster.p0yu1.mongodb.net/zerodha?retryWrites=true&w=majority&appName=ZerodhaCloneCluster";

// app.get("/",(req,res) => {
//     res.send("Welcome to the Root Server!");
// });

// app.get("/addPositions", async (req,res) => {
//     let tempPositions = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];
//           tempPositions.forEach((item) => {
//             let newPosition = new PositionsModel({
//               product: item.product,
//               name: item.name,
//               qty: item.qty,
//               avg: item.avg,
//               price: item.price,
//               net: item.net,
//               day: item.day,
//               isLoss: item.isLoss,
//             });

//            newPosition.save();
//           });
//     res.send("Done!");
// });

app.get("/allHoldings", async (req,res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req,res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req,res) => {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order saved!");
});


// app.use(
//   cors({
//     origin: ["http://localhost:4001"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// // ✅ Manually set CORS headers for preflight requests
// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4001");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(200);
// });


app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);

// app.post("/signup", (req,res) => {
//   try {
//     res.redirect("/Controllers/AuthController.js");
//   }
//   catch(err){
//     console.log(err);
//   }
// });

app.listen(PORT,() => {
  console.log('Listening to port 4001');
  
  console.log("DB Connected!");
});
