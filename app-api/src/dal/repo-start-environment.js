import db from './db'

export function selectAll(callback) {

    const query = "SELECT * FROM startEnvironment"

    db.query(query, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        for(let element of data) {
            element.hazmatStatus = element.hazmatStatus.readUIntBE(0,1)
        }
        
        callback(null, data)

    })

}

export function selectBySessionId(id, callback) {

    const query = "SELECT * FROM startEnvironment WHERE sessionId = ?"
    const value = [id]

    db.query(query, value, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        for(let element of data) {
            element.hazmatStatus = element.hazmatStatus.readUIntBE(0,1)
        }

        callback(null, data)

    })

}

export function insertAll(row, callback) {

    const query = "INSERT INTO startEnvironment (sessionId, radiationLevel, hazmatStatus, roomId) VALUES (?, ?, b?, ?)"
    const values = [row.sessionId, row.radiationLevel, row.hazmatStatus, row.roomId]

    db.query(query, values, (error) => {

        if (error) {
            callback(error.message)
            return
        } 

        callback(null)

    })
}