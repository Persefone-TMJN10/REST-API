/* NPM-PACKAGES */
import express from 'express'

/* MODULES */
import { getAll, getBySessionId, post } from '../../bll/start-environment/manager-start-environment'

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

    var startEnvironment = {
        sessionId: req.body.sessionId,
        radiationLevel: req.body.radiationLevel,
        hazmatStatus: req.body.hazmatStatus,
        roomId: req.body.roomId
    }

    var resObj = {
        status: 200,
        message: 'OK'
    }

    post(startEnvironment, (error) => {

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