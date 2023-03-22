const InputTimeZone = ({timezone, change}) => {
    return(
        <>
            <label id='time'>
                <div>Временная зона</div>
                <input id='time' onChange={e => change(e)} value={timezone} type='number'/>
            </label>
        </>
    );
}

export default InputTimeZone;