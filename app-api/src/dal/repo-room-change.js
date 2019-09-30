import db from './db'

export function selectAll(callback) {

    const query = "SELECT * FROM roomChange"

    db.query(query, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }
        
        callback(null, data)

    })

}

export function selectBySessionId(id, callback) {

    const query = "SELECT * FROM roomChange WHERE sessionId = ?"
    const value = [id]

    db.query(query, value, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        callback(null, data)

    })

}

export function insertAll(row, callback) {

    const query = "INSERT INTO hazmatChange (sessionId, fromRoomId, toRoomId, time) VALUES (?, ?, ?, ?)"
    const values = [row.sessionId, row.fromRoomId, row.toRoomId, row.time]

    db.query(query, values, (error) => {

        if (error) {
            callback(error.message)
            return
        } 

        callback(null)

    })
}