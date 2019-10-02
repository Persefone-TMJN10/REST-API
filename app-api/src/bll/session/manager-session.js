import { selectAll, insertAll, updateSession }  from '../../dal/repo-session'

export function getAll(callback) {

    selectAll((error, data) => {

        if(error){
            callback(error, null)
            return
        }

        callback(null, data)

    })

}

export function setAll(session, callback) {

    insertAll(session, (error, insertId) => {

        if (error) {
            callback(error, null)
            return
        }

        callback(null, insertId)
    })
}

export function update(session, callback) {

    updateSession(session, (error) => {

        if (error) {
            callback(error)
            return
        } 

        callback(null)
    })
}