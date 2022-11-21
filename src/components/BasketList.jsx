import BasketItem from './BasketItem'

function BasketList(props) {
    const {
        order = [],
        handleBasketShow,
        removeFromBasket
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
                />
            )) : <li className="collection-item">Cart is empty</li>
        }

        <li className="collection-item active">Total: {totalPrice}</li>
        <i className="material-icons basket-close"
           onClick={handleBasketShow}>close</i>
    </ul>
}

export default BasketList
