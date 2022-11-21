function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket,
        incrementQuantity,
        decrementQuantity
    } = props

    return <li className="collection-item">
        {displayName}
        <i className="material-icons basket-quantity"
           onClick={() => decrementQuantity(mainId)}>remove</i>
        x{quantity}
        <i className="material-icons basket-quantity"
           onClick={() => incrementQuantity(mainId)}>add</i>

        = {price.finalPrice * quantity}
        <span className="secondary-content"
              onClick={() => removeFromBasket(mainId)}>
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>
}

export default BasketItem
