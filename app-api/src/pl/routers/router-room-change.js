/* NPM-PACKAGES */
import express from 'express'

/* MODULES */
import { getAll, getBySessionId, post } from '../../bll/room-change/manager-room-change'

/* ROUTER INIT */
const router = express.Router()

/* GET-MIDDLEWARES */
router.get('/', (req, res) => {

    var resObj = {
        status: 200,
        message: 'OK'
    }

    if(req.query.sessionId) {

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

    var roomChange = {
        sessionId: req.body.sessionId,
        roomId: req.body.roomId,
        time: req.body.time
    }

    var resObj = {
        status: 200,
        message: 'OK'
    }

    post(roomChange, (error) => {

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