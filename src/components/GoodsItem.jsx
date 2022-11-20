function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets
    } = props

    return <div className="card" id={mainId}>
        <div className="card-image">
            <img src={displayAssets[0].full_background} alt={displayName}/>
        </div>
        <div className="card-content">
            <p>{displayDescription || 'no description'}</p>
            <div className="card-action">
                <span className="card-title">{displayName}</span>
                <button className="btn">Buy</button>
                <span className="right"
                      style={{fontSize: '1.8rem'}}>{price.finalPrice} Coins</span>
            </div>
        </div>
    </div>
}

export default GoodsItem
