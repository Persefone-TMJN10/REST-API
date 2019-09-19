/* NPM-PACKAGES */
import express from 'express'

/* MODULES */
import { getAll, setAll, updateSession } from '../../bll/session/manager-session'
import { selectAll } from '../../dal/repo-session'

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

/* POST-MIDDLEWARES */
router.post('/', (req, res) => {

    var session = {
        inTime: req.body.inTime,
        outTime: req.body.outTime
    }

    var resObj = {
        status: 200,
        message: 'OK'
    }

    setAll(session, (error) => {

        if (error) {
            resObj.status = 500
            resObj.message = 'Internal Server Error'
            resObj.errorMessage = error
        }

        res.status(resObj.status).json(resObj)
    })
})

/* PUT-MIDDLEWARES */
router.put('/', (req, res) => {

    var session = {
        inTime: req.body.inTime,
        outTime: req.body.outTime
    }

    var resObj = {
        status: 200,
        message: 'OK'
    }

    updateSession(session, (error) => {
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