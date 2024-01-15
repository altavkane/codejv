import { Request, Response } from "express"
import { json } from "stream/consumers"

// const atau let untuk mendeklarasikan sebuah variabel/object/array/function
const luaslingkaran = (request: Request,response: Response) => {

    try{
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = phi *r*r
        return response.status(200)
        .json({
            status: true,
            r:
            luas
        })
        

    } catch (error){
        return response.status(500)
        .json({
            status:false,
            message: error
        })
    }
}
const kelilinglingkaran = (request: Request,response: Response) => {

    try{
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = 2*r*r
        return response.status(200)
        .json({
            status: true,
            r:
            kelilinglingkaran
        })
        

    } catch (error){
        return response.status(500)
        .json({
            status:false,
            message: error
        })
    }
}
const volumeTabung = (request: Request,response: Response) => {

    try{
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.r)
        const volume = phi *r*r*t
        return response.status(200)
        .json({
            status: true,
            r:
            volumeTabung
        })
        

    } catch (error){
        return response.status(500)
        .json({
            status:false,
            message: error
        })
    }
}

export {luaslingkaran} 
export{kelilinglingkaran}