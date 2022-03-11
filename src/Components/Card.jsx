const Card = (props)=>{
    return(
        <div className="card">
            <img src={props.imgsrc} alt="star wars" />
            <div className="card_content">
                <h2>{props.title}</h2>
                <h4>{props.episode}</h4>
                <p>Year : {props.year}</p>
                <p>Type : {props.type}</p>
            </div>
        </div>
    )
}
export default Card;