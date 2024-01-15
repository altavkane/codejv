// ini adalah file utama dimana ada proses menjalankan server backend

// memanggil library express
import express, { Request, Response } from "express";
import routeBangunDatar from "./route/bangunDatar"
import routebangunRuang from "./route/bangunRuang"


// buat wadah untuk inisiasi express nya
const app = express();

// mendefinisikan PORT berjalannya server
const PORT = 8000;
// **allow to reed JSON 
app.use(express.json())

// proses pertama untuk handle request
app.get(`/serena`, (request: Request, response: Response) => {
  // memberi response
  return response.status(200).json({
    message: `Hello Serena anaknya Bu Siana`,
  });
});
// ini adalah proses handle request dengan url/address: http://localhost:8000/serena method: GET

// read a query request
app.get(`/moklet`, (request: Request, response: Response) => {
  // asumsikan data yang dikirim adalah nama dan umur
  let nama: any = request.query.nama?.toString()
  let umur: any = request.query.umur?.toString()

  let message: string = `My name is ${nama} and i'm ${umur} years old`
  return response.status(200).json(message)
})
/**reed data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response) => {
  let nama: string = request.params.nama
  let gender: string = request.params.gender
  let message: string = `my name is ${nama} and my gender is ${gender}`
  return response.status(200).json(message)
})

// ** reed a request from body */
app.post(`/moklet`, (request: Request, response: Response) => {
  // **asumsikan data yg dikirim adalah
  // * panjang dan lebar
  let panjang: number = request.body.panjang
  let lebar: number = request.body.lebar

  let luaspersegipanjang: number = panjang * lebar
  let message = `luas persegi panjang adalah ${luaspersegipanjang}}`
  return response.status(200).json(message)
})

// ** reed a request
app.get(`/celcius/:suhuAwal`, (request: Request, response: Response) => {
  let suhuAwal: any = request.params.suhuAwal
  let fahrenheit: number = 9/5 *suhuAwal + 32
  let reamur: number = 4 / 5 * suhuAwal
  let kelvin: number = suhuAwal + 273.15
  
  let Message = `reamur = ${ reamur } fahrenheit = ${ fahrenheit } kelvin = ${ kelvin }`
  return response.status(200).json(Message)
})

// **request reed for count volume
app.post(`/balok `, (request: Request, response: Response) => {
  // reed panjang lebar tinggi 
  let panjang: number = Number(request.body.panjang)
  let lebar: number = Number(request.body.lebar)
  let tinggi: number = Number(request.body.ltinggi)

  let volume: number = panjang * lebar * tinggi
  return response.status(200).json({
    panjang,lebar,tinggi

  })



})
// register route bgn datar
app.use(routeBangunDatar)
app.use(routebangunRuang)

// run server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
