function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket
    } = props

    return <li className="collection-item">
        {displayName} x{quantity} = {price.finalPrice * quantity}
        <span className="secondary-content"
              onClick={() => removeFromBasket(mainId)}>
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>
}

export default BasketItem
