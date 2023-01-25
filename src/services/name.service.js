
import httpService from "./http.service";

const nameEndPoint = 'name.json'

const nameService = {
    get: async () => {
        const {data} = await httpService.get(nameEndPoint)
        return data
    },
    update: async (id, content) => {

    },
    post: async (id, content) => {

    },
}

export default nameService