import express, { application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import nestingSitesRoute from "./routes/nestingSites.js";
import speciesNestingRoute from "./routes/speciesNesting.js";
import nestingSeasonRoute from "./routes/nestingSeason.js";
import dailyNestingActivityRoute from "./routes/dailyNestingActivity.js";
import newLocationRoute from "./routes/newLocation.js";
import nestSuccessRoute from "./routes/nestSuccess.js";
import nestingSiteTrendRoute from "./routes/nestingSiteTrend.js";
import climateFactorRoute from "./routes/climateFactor.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from 'path';
import morgan from 'morgan';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/nestingSites", nestingSitesRoute);
app.use("/api/speciesNesting", speciesNestingRoute);
app.use("/api/nestingSeason", nestingSeasonRoute);
app.use("/api/dailyNestingActivity", dailyNestingActivityRoute);
app.use("/api/newLocation", newLocationRoute);
app.use("/api/nestSuccess", nestSuccessRoute);
app.use("/api/nestingSiteTrend", nestingSiteTrendRoute);
app.use("/api/climateFactor", climateFactorRoute);

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/admin/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('Hello Isini Bandara Your API is running....')
  })
}

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!!");
});
