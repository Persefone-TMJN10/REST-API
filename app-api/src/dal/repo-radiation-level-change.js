import db from './db'

export function selectAll(callback) {

    const query = "SELECT * FROM radiationLevelChange"

    db.query(query, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }
        
        callback(null, data)

    })

}

export function selectByTimeInterval(timestamps, callback) {

    const query = "SELECT * FROM radiationLevelChange WHERE time > ? AND time < ?"
    const values = [timestamps.start, timestamps.end]

    db.query(query, values, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
            return
        }

        callback(null, data)

    })

}

export function insertAll(row, callback) {

    const query = "INSERT INTO radiationLevelChange (level, time) VALUES (?, ?, ?)"
    const values = [row.level, row.time]

    db.query(query, values, (error) => {

        if (error) {
            callback(error.message)
            return
        } 

        callback(null)

    })
}