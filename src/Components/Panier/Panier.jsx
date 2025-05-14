function Panier(props){
    console.log(props.article);
    
    return(
        <div>
            <div>
                <div>
                 <h3>Panier :</h3>   
                </div>
             {
                props.article.map(article =>(
                    <p> {article.nom} {article.quantite}  </p>
                ))
             } 
            </div>
        </div>
    )
}
export default Panier