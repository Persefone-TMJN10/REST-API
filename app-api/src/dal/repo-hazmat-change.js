import db from './db'

export function selectAll(callback) {

    const query = "SELECT * FROM hazmatChange"

    db.query(query, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        for(let element of data) {
            element.status = element.status.readUIntBE(0,1)
        }
        
        callback(null, data)

    })

}

export function selectByTimeInterval(timestamps, callback) {

    const query = "SELECT * FROM hazmatChange WHERE time > ? AND time < ?"
    const values = [timestamps.start, timestamps.end]

    db.query(query, values, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        for(let element of data) {
            element.status = element.status.readUIntBE(0,1)
        }

        callback(null, data)

    })

}

export function selectBySessionId(id, callback) {

    const query = "SELECT * FROM hazmatChange WHERE sessionId = ?"
    const value = [id]

    db.query(query, value, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        for(let element of data) {
            element.status = element.status.readUIntBE(0,1)
        }

        callback(null, data)

    })

}

export function insertAll(row, callback) {

    const query = "INSERT INTO hazmatChange (sessionId, status, time) VALUES (?, b?, ?)"
    const values = [row.sessionId, row.status, row.time]

    db.query(query, values, (error) => {

        if (error) {
            callback(error.message)
            return
        } 

        callback(null)

    })
}