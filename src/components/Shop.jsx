import React, {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'
import Preloader from './Preloader'
import GoodsList from './GoodsList'
import Cart from './Cart'

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

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
        <Cart quantity={order.length}/>
        {loading ? <Preloader/> : <GoodsList goods={goods}/>}
    </main>
}

export default Shop

