import React, {useEffect, useState} from 'react';
import config from "../config.json";
import httpService from "../services/http.service";

function Request2() {
    const [state, setState] = useState();

    // 3 вариант. С обработкой ошибки
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await httpService.get(config.apiEndPointName)
                setState(data)
            } catch (e) {
                const isExpectedError = e.response && e.response.status >= 400 && e.response.status < 500;
                if (isExpectedError) console.log(`Ожидаемая ошибка. Что-то с приложением. Название ошибки: `, e.response.data)
            }
        }
        fetchData()
    })


    return (
        <div>
            {state && (<h1>{state}</h1>)}
        </div>
    );
}

export default Request2;