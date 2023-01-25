import axios from "axios";
import {logger} from "./log.servise";

// interceptors - перехватчики. response - ошибки
// тут перехватываем ошибки сервера.
axios.interceptors.response.use(
    res => res,
    e => {
        const isExpectedError = e.response && e.response.status >= 400 && e.response.status < 500;
        if (!isExpectedError) {
            // тут отлавливаем ошибки сервера через Sentry.
            // Подробнее: https://lk.result.school/pl/teach/control/lesson/view?id=253585341
            // Подробнее: https://lk.result.school/pl/teach/control/lesson/view?id=258593031
            logger.log(e)
            console.log(`Неожидаемая ошибка. Что-то с сервером. Название ошибки: `, e.response.data)
        }
        return Promise.reject((e))
    })

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}

export default httpService