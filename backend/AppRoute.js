import express from 'express'
import * as HotelsController from './controllers/HotelsController.js'
import insertHotelRequest from './dtos/requests/hotel/insertHotelRequest.js'
import updateHotelRequest from './dtos/requests/hotel/updateHotelRequest.js'
const router = express.Router()

export function AppRoute(app){
    router.get('/hotels', HotelsController.getHotels)
    router.get('/hotels/:id', HotelsController.getHotels)
    router.post('/hotels', HotelsController.getHotels)
    router.put('/hotels', HotelsController.getHotels)
    router.delete('/hotels/:id', HotelsController.getHotels)


    app.use('/api/', router)
}