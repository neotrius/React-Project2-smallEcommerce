function BasketItem(props) {
    const {
        mainId, displayName, price, quantity
    } = props

    return <li className="collection-item">
        {displayName} x{quantity} = {price.finalPrice}
        <span className="secondary-content">
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>
}

export default BasketItem
