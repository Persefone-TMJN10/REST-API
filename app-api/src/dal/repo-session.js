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