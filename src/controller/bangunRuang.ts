import { Request, Response } from "express"
import { json } from "stream/consumers"
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
const luaspermukaan = (request: Request,response: Response) => {

    try{
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.r)
        const luaspermukaan = 2 * phi *r*(r+t)
        return response.status(200)
        .json({
            status: true,
            r:
            luaspermukaan
        })
        

    } catch (error){
        return response.status(500)
        .json({
            status:false,
            message: error
        })
    }
}
const volumeKubus = (request: Request,response: Response) => {

    try{
        const phi = Math.PI
        const s: number = Number(request.body.r)
        
        const volume = s*s*s
        return response.status(200)
        .json({
            status: true,
            s:
            volumeKubus
        })
        

    } catch (error){
        return response.status(500)
        .json({
            status:false,
            message: error
        })
    }
}
const luaskubus = (request: Request,response: Response) => {

    try{
        const phi = Math.PI
        const s: number = Number(request.body.r)
        
        const luaspermukaan = s*s*s
        return response.status(200)
        .json({
            status: true,
            s:
            luaskubus
        })
        

    } catch (error){
        return response.status(500)
        .json({
            status:false,
            message: error
        })
    }
}


export {volumeTabung}
export {luaspermukaan}
export {volumeKubus}
export {luaskubus}


