function Panier(props) {


    return (
        <div>
            <div>
                <div>
                    <h3>Panier :</h3>
                </div>
                {
                    props.article.map(article => (

                        <div>
                            {
                                article.quantite>=1 && <div><p> {article.nom} x {article.quantite}  </p>
                            <button onClick={()=>props.rendre(article)}>Retourner</button></div>
                            }
                            
                            {/* {article.quantite >= 1 ? article.nom : ''} */}
                        </div>
                    ))
                }

                
            </div>
        </div>
    )
}
export default Panier