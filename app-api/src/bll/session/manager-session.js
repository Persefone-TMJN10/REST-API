import { selectAll }  from '../../dal/repo-session'

export function getAll(callback) {

    selectAll((error, data) => {

        if(error){
            callback(error, null)
            return
        }

        callback(null, data)

    })

}