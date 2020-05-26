import React, { ChangeEvent } from "react"
import "./index.css"

const cartData = Array(6)
    .fill(undefined)
    .map((item, index) => ({
        id: index,
        name: `商品${index + 1}`,
        price: Math.round(Math.random() * 100),
        checked: false,
    }))

type ShopItem = typeof cartData
export const Shopping: React.FC = () => {
    const [shopItem, setShopItem] = React.useState<ShopItem>([])
    const [totalPrice, setTotalPrice] = React.useState<number>(0)
    const inputAllRef = React.useRef<HTMLInputElement>(null)

    const handleChange2TotalPrice = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const aArr = cartData.map((item) => {
            return item.price
        })
        const bArr = aArr.reduce((x, y) => x + y)
        let isC = e.target.checked
        if (isC) {
            setTotalPrice(bArr)
            cartData.map((item) => (item.checked = true))
        } else {
            setTotalPrice(0)
            setShopItem([])
            cartData.map((item) => (item.checked = false))
        }
    }
    const handleChange2ItemPrice = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const isC = e.target.checked
        if (isC) {
            cartData[index].checked = true
            setShopItem([...shopItem, cartData[index]])
            setTotalPrice(totalPrice + cartData[index].price)
        } else {
            cartData[index].checked = false
            shopItem.splice(index, 1)
            setShopItem(shopItem)
            setTotalPrice(totalPrice - cartData[index].price)
        }
        if (shopItem.length + 1 === cartData.length) {
            if (inputAllRef && inputAllRef.current) {
                inputAllRef.current.checked = true
            }
        } else {
            ;(inputAllRef.current as HTMLInputElement).checked = false
        }
        console.log(
            shopItem.length + 1,
            shopItem,
            "index" + index,
            cartData.length
        )
    }

    return (
        <div className={"shop-container"}>
            <h2>购物车</h2>
            <div>
                {cartData.map((item, index) => {
                    return (
                        <p key={index}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={(e) =>
                                    handleChange2ItemPrice(e, index)
                                }
                            />
                            {item.name}
                            <span>{`$${item.price}`}</span>
                        </p>
                    )
                })}
            </div>
            <div>
                <p>
                    <input
                        type="checkbox"
                        ref={inputAllRef}
                        onChange={handleChange2TotalPrice}
                    />
                    全选
                    <span>{`总计：$${totalPrice}`}</span>
                </p>
            </div>
        </div>
    )
}
