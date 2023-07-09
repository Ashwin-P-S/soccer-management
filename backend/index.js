import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/soccerRoutes";

const app = express();

const PORT = 4000;

// MongoDB Connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/SoccerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// BodyParser Setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS Setup

app.use(cors());

routes(app);

app.get("/", (req, res) =>
    res.send(`Our Soccer Application is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Soccer Server is running on port ${PORT}`));
