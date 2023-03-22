const InputName = ({name, change}) => {
    return(
        <>
            <label id='name'>
                <div>Название</div>
                <input id='name' onChange={e => change(e)} value={name}/>
            </label>
        </>
    );
}

export default InputName;