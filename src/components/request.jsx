import React, {useEffect, useState} from 'react';
import nameService from "../services/name.service";
import {toast} from "react-toastify";

function Request() {
    const [content, setContent] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true);

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

    // Делаем кучу таких функций, которые обращаются к серверу
    const getName = async () => {
        try {
            const name = await nameService.get()
            setContent(name)
            setLoading(false)
        } catch (e) {
            errorCatcher(e)
        }
    }


    return (
        <div>
            {content && (<h1>{content}</h1>)}
        </div>
    );
}

export default Request;