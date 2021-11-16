import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";


const PORT=5000;

const app=express();
const logger=morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");

app.use(logger);

app.use("/", globalRouter);
app.use("/users",userRouter);
app.use("/stories", storyRouter);



const handleListening=() => {
    console.log(`✅ server listening on local host http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);