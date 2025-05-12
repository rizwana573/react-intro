const ProdCard = ({prodDetails}) => {
    return (
        <div className="cardOuterWrap">
           <img alt="" className="prodImage" src={prodDetails.images}></img>
           <div className="prodDeets">
            <div className="prodTitle">{prodDetails.title}</div>
            <div className="prodCategory">{prodDetails.category}</div>
            <div className="prodRating">{prodDetails.rating}</div>
            <div className="prodPrice">{prodDetails.price}</div>
           </div>
        </div>
    )
}

export default ProdCard;