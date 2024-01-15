import  Express from "express";
import { kelilinglingkaran, luaslingkaran } from "../controller/bangunDatar";
const app = Express()

// allow reed body
app.use(Express.json())

// aaaaa
app.post(`/lingkaran/luas`,luaslingkaran)
app.post(`/lingkaran/keliling`,kelilinglingkaran)

export default app