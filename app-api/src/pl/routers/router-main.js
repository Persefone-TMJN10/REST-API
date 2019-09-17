/* NPM-PACKAGES */
import express from 'express'

/* ROUTER INIT */
const router = express.Router()

/* GET-MIDDLEWARES */
router.get('/', (req, res) => {

    var resObj = {
        status: 200,
        message: "For documentation visit https://github.com/Persefone-TMJN10/REST-API"
    }

    res.status(resObj.status).json(resObj)

})

/* EXPORT */
export default router