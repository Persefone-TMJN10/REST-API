/* NPM-PACKAGES */
import express from 'express'

/* MODULES */
import { getAll } from '../../bll/session/manager-session'

/* ROUTER INIT */
const router = express.Router()

/* GET-MIDDLEWARES */
router.get('/', (req, res) => {

    getAll((error, data) => {

        var resObj = {
            status: 200,
            message: 'OK'
        }

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

})

/* EXPORT */
export default router