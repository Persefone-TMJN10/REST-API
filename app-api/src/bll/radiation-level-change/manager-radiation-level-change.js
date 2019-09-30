import { selectAll, insertAll, selectByTimeInterval } from '../../dal/repo-radiation-level-change'

export function getAll(callback) {

    selectAll((error, data) => {

        if(error) {
            callback(error, null)
            return
        }

        callback(null, data)

    })

}

export function getByTimeInterval(timestamps, callback) {

    selectByTimeInterval(timestamps, (error, data) => {

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