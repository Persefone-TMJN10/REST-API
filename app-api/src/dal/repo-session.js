import db from './db'

export function selectAll(callback) {

    const query = "SELECT * FROM session"

    db.query(query, (error, data) => {

        if(error){
            console.log(error.message)
            callback(error.message, null)
        }
        else {
            callback(null, data)
        }

    })

}

export function insertAll(session, callback) {

    const query = "INSERT INTO session (inTime, outTime) VALUES (?, ?)"
    const values = [session.inTime, session.outTime]

    db.query(query, values, (error) => {

        if(error) {
            callback(error.message)
        } else {
            callback(null)
        }
    })
}