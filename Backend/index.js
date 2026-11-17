import express, { application, json } from "express";
import cors from "cors";
import User from "./UserModel.js";
import dbconnect from "./connectdb.js";
import { upload } from "./multer.js";
const server = express();
server.use(cors());
server.use(express.json());
dbconnect();

// server.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   const axits = await User.findOne({ email });
//   if (axits) {
//     return res.json("  email  is alrrdy ");
//   }
//   await User.create({ name, email, password });
//   return res.json("success fulll");
// });

// server.post("/loginup", async (req, res) => {
//   const { email, password } = req.body;
//   const axitsing = await User.findOne({ email });
//   if (!axitsing) {
//     return res.json("Usr is  notfind");
//   }
//   if (axitsing.password !== password) {
//     return res.json("lnavlid password");
//   }
//   return res.json("login successful");
// });

// server.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   const axist = await User.findOne({ email });
//   if (axist) {
//     return res.json("  email is  alrdy ");
//   }
//   await User.create({ name, email, password });
//   return res.json(" sccecfull ");
// });

server.post("/signup", upload.single("image"), async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.file.filename, "signup");

  const exsit = await User.findOne({ email });
  if (exsit) {
    return res.json("email  is  allrady");
  }
  await User.create({ name, email, password, image: req.file.filename });
  return res.send("secccfull");
});
// server.post("/loginup", async (req, res) => {
//   const { email, password } = req.body;

//   const exsit = await User.findOne({ email });
//   if (!exsit) {
//     return res.json({
//       msg: "succecc not find",
//       success: false
//     })
//   }
//   if (exsit.password !== password) {
//     return res.json({
//       msg: "livind password",
//       success: false
//     })
//   }
//   return res.json({
//     msg: "login succeccfull",
//     success: true
//   })
// })

server.post("/data", async (req, res) => {
  const { fname, lname } = req.body;
  await User.create({ fname: fname, lname: lname });
  res.json("data  is running");
});

server.get("/product", async (req, res) => {
  const Useralla = await User.find();
  res.json(Useralla);
});

server.post("/delete", async (req, res) => {
  const { _id } = req.body;
  await User.findByIdAndDelete(_id);
  res.send("delete");
});

server.post("/updata", async (req, res) => {
  const { fname, lname, _id } = req.body;
  await User.findByIdAndUpdate(_id, { fname, lname });
  res.json("updata");
});

server.post("/loginup", async (req, res) => {
  const { email, password } = req.body;

  const exsite = await User.findOne({ email });
  if (!exsite) {
    return res.json({
      masg: "email is  allrdya",
      success: false,
    });
  }

  if (exsite.password !== password) {
    return res.json({
      masg: "livind password",
      success: false,
    });
  }

  return res.json({
    masg: "login  is alardy",
    success: true,
  });
});

// server.get("/all", async (req, res) => {
//   const allauser = await User.find();
//   return (
//     res,
//     json({
//       users: allauser,
//     })
//   );
// });

server.listen(5000, () => {
  console.log("server  is running  on 5000 ");
});
