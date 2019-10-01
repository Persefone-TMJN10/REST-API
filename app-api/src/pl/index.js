/* NPM-PACKAGES */
import express from 'express'
import bodyParser from 'body-parser'

/* ROUTER MODULES */
import routerMain from './routers/router-main'
import routerSession from './routers/router-session'
import routerStartEnvironment from './routers/router-start-environment'
import routerRadiationLevelChange from './routers/router-radiation-level-change'
import routerHazmatChange from './routers/router-hazmat-change'
import routerRoomChange from './routers/router-room-change'

/* APPLICATION */
const app = express()

/* CORS-SETUP */

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')

    next()

})

/* BODY PARSER */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* ROUTING */
app.use('/', routerMain)
app.use('/session', routerSession)
app.use('/start-environment', routerStartEnvironment)
app.use('/radiation-level-change', routerRadiationLevelChange)
app.use('/hazmat-change', routerHazmatChange)
app.use('/room-change', routerRoomChange)

/* 404 RESPONSE */
app.use((req, res) => {

    var resObj = {
        status: 404,
        message: 'Resource not found'
    }

    res.status(resObj.status).json(resObj)

})

/* RUN */
const port = process.env.PORT_API

app.listen(port, () => {
    console.log('app-api listening on port ' + port)
})