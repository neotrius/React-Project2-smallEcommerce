import React, {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'
import Preloader from './Preloader'
import GoodsList from './GoodsList'
import Cart from './Cart'
import BasketList from './BasketList'

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem, quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }


    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(res => res.json())
            .then(data => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    }, [])

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {
            loading ? <Preloader/> :
                <GoodsList goods={goods} addToBasket={addToBasket}/>
        }
        {
            isBasketShow &&
            <BasketList order={order} handleBasketShow={handleBasketShow}/>
        }
    </main>
}

export default Shop

