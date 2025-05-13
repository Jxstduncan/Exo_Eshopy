import './Articles.css'
function Articles (props){
   
    
    return(
        <div>
            <div className='card'>
            <img src={props.article.url} alt="" className="img" />
            <h3> {props.article.nom} </h3>
            <p> Prix : {props.article.prix} </p>
            <p>Stock : {props.article.stock} </p>
            <button className='buy'>Acheter</button>
            </div>
        </div>
    )
}
export default Articles