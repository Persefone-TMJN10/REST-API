/* NPM-PACKAGES */
import express from 'express'

/* ROUTER INIT */
const router = express.Router()

/* GET-MIDDLEWARES */
router.get('/', (req, res) => {

    const inTime = new Date('September 18, 2019 13:37:00')
    const outTime = new Date('September 19, 2019 00:00:01')

    const dummyData = [
        {
            id: 1,
            inTime: inTime.toString(),
            outTime: outTime.toString()
        }
    ]

    var resObj = {
        status: 200,
        message: "Request Successful",
        payload: dummyData
    }

    res.status(resObj.status).json(resObj)

})

/* EXPORT */
export default router