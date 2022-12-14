import BasketItem from './BasketItem'

function BasketList(props) {
    const {
        order = [],
        handleBasketShow,
        removeFromBasket,
        incrementQuantity,
        decrementQuantity
    } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0)

    return <ul
        className="collection basket-list">
        <li className="collection-item active">Cart</li>
        {
            order.length ? order.map(el => (
                <BasketItem
                    key={el.id}
                    {...el}
                    removeFromBasket={removeFromBasket}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            )) : <li className="collection-item">Cart is empty</li>
        }

        <li className="collection-item active">
            Total: {totalPrice}
        </li>
        <li className="collection-item">
            <button className="btn btn-small">
                Proceed to payment
            </button>
        </li>
        <i className="material-icons basket-close"
           onClick={handleBasketShow}>close</i>
    </ul>
}

export default BasketList
