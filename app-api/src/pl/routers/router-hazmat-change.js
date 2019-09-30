/* NPM-PACKAGES */
import express from 'express'

/* MODULES */
import { getAll, getByTimeInterval, getBySessionId, post } from '../../bll/hazmat-change/manager-hazmat-change'

/* ROUTER INIT */
const router = express.Router()

/* GET-MIDDLEWARES */
router.get('/', (req, res) => {

    var resObj = {
        status: 200,
        message: 'OK'
    }

    if(req.query.startTime && req.query.endTime) {

        const timestamps = {
            start: req.query.startTime,
            end: req.query.endTime
        }

        getByTimeInterval(timestamps, (error, data) => {

            if(error){
                resObj.status = 500
                resObj.message = 'Internal Server Error'
                resObj.errorMessage = error
            }
            else {
                resObj.payload = data
            }

            res.status(resObj.status).json(resObj)

        })

    }
    else if(req.query.sessionId) {

        getBySessionId(req.query.sessionId, (error, data) => {

            if(error){
                resObj.status = 500
                resObj.message = 'Internal Server Error'
                resObj.errorMessage = error
            }
            else {
                resObj.payload = data
            }

            res.status(resObj.status).json(resObj)

        })

    }
    else {

        getAll((error, data) => {
    
            if(error){
                resObj.status = 500
                resObj.message = 'Internal Server Error'
                resObj.errorMessage = error
            }
            else {
                resObj.payload = data
            }
    
            res.status(resObj.status).json(resObj)
    
        })

    }

})

/* POST-MIDDLEWARES */
router.post('/', (req, res) => {

    var hazmatChange = {
        sessionId: req.body.sessionId,
        status: req.body.status,
        time: req.body.time
    }

    var resObj = {
        status: 200,
        message: 'OK'
    }

    post(hazmatChange, (error) => {

        if (error) {
            resObj.status = 500
            resObj.message = 'Internal Server Error'
            resObj.errorMessage = error
        }

        res.status(resObj.status).json(resObj)
    })
})

/* EXPORT */
export default router