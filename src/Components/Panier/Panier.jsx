function Panier(props){
    return(
        <div>
            <div>
             {
                props.article.map(articles=>{
                    <p>{props.article.quantite} </p>
                })
             } 
            </div>
        </div>
    )
}
export default Panier