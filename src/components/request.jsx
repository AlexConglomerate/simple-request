import React, {useEffect, useState} from 'react';
import nameService from "../services/name.service";
import {toast} from "react-toastify";

function Request() {
    const [state, setState] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getName()
    })

    // Глобальная обработка ошибок
    useEffect(() => {
        if (error != null) {
            toast(error)
            setError(null)
        }
    }, [error])


    const errorCatcher = (e) => {
        const {message} = e
        setError(message)
        toast.error(message)
    }

    // Функции, которые вызывают функции nameService. Тут таких будет много
    const getName = async () => {
        try {
            const name = await nameService.get()
            setState(name)
        } catch (e) {
            errorCatcher(e)
        }
    }


    return (
        <div>
            {state && (<h1>{state}</h1>)}
        </div>
    );
}

export default Request;