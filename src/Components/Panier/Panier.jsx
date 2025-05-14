function Panier(props) {
    console.log(props.article);

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
                                article.
                            }
                            <p> {article.nom} x {article.quantite}  </p>
                            {/* {article.quantite >= 1 ? article.nom : ''} */}
                        </div>
                    ))
                }

                <button>Retourner</button>
            </div>
        </div>
    )
}
export default Panier