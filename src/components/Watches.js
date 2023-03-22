import Watch from "./Watch";

const Watches = ({watches, remove}) => {

    return(
        <div className='watches'>
            {
                watches && watches.map(el => {
                    return(
                        <Watch elem={el} remove={remove} key={el.id} time={el.timezone}/>
                    );
                })
            }
        </div>
    )
}

export default Watches;