import { selectAll, insertAll, selectBySessionId } from '../../dal/repo-start-environment'

export function getAll(callback) {

    selectAll((error, data) => {

        if(error) {
            callback(error, null)
            return
        }

        callback(null, data)

    })

}

export function getBySessionId(id, callback) {

    selectBySessionId(id, (error, data) => {

        if(error) {
            callback(error, null)
            return
        }

        callback(null, data)

    })

}

export function post(data, callback) {

    insertAll(data, (error) => {

        if(error) {
            callback(error)
            return
        }

        callback(null)

    })

}