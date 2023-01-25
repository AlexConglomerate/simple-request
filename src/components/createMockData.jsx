import React from 'react';
import professions from '../mocData/professions.json'
import qualities from '../mocData/qualities.json'
import users from '../mocData/users.json'
import httpService from "../services/http.service";

function CreateMockData() {

    const send = async (array, url, id) => {
        let count = 1
        for (const item of array) {
            try {
                await httpService.put(url + item[id], item)
                console.log(url, count++, '/', array.length)
            } catch (e) {
                console.log(`Ошибочка! `, e)
            }
        }
        console.log(`░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`)
    }

    const handleClick = async () => {
        await send(professions, "professions/", "_id")
        await send(qualities, "qualities/", "_id")
        await send(users, "users/", "_id")
    }

    return (
        <div>
            <button
                className={' bg-yellow-300 p-2 m-2 rounded-lg hover:bg-yellow-400 '}
                onClick={handleClick}
            >Загрузить
            </button>
        </div>
    );
}

export default CreateMockData;