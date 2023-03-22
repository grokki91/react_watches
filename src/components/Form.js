import InputName from "./InputName";
import InputTimeZone from "./InputTimeZone";
import { useState } from "react";
import Watches from "./Watches";

const Form = () => {
    const [name, setName] = useState('');
    const [timezone, setTimezone] = useState('');
    const [watches, setWatches] = useState([])

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeTimezone = (e) => {
        setTimezone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentWatch = {
            id: new Date().getTime(),
            name: name,
            timezone: timezone
        }

        if (name && timezone) {
            setWatches([...watches, currentWatch]);
            setName('');
            setTimezone('');
        }
    }

    const handleRemove = (id) => {
        setWatches(watches.filter(el => el.id !== id))
    }

    return(
        <div className='main'>
            <form className="form" onSubmit={e => handleSubmit(e)}>
                <InputName name={name} change={handleChangeName}/>
                <InputTimeZone timezone={timezone} change={handleChangeTimezone}/>
                <button>Добавить</button>
            </form>
            <Watches watches={watches} remove={handleRemove}/>
        </div>
    )
}

export default Form;