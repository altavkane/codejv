import  Express from "express";
import { luaskubus, luaspermukaan, volumeKubus, volumeTabung } from "../controller/bangunRuang";
const app = Express()

// allow reed body
app.use(Express.json())

// aaaaa
app.post(`/tabung/volume`,volumeTabung)
app.post(`/tabung/luas`,luaspermukaan)
app.post(`/kubus/volume`,volumeKubus)
app.post(`/kubus/luas`,luaskubus)




export default app
