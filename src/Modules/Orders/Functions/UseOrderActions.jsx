import {
    $,
    useContext,
} from "@builder.io/qwik"
import {
    AppContext,
    post,
} from "Base"
import { useAuthSession } from "Accounts"

const useOrderActions = () => {

    const session = useAuthSession()

    const app = useContext(AppContext)

    const handelMessage = $((messageKey, isError) => {
        app.messageKey = messageKey
        app.messageIsShown = true
        app.messageIsError = isError
        setTimeout(() => {
            app.messageIsShown = false
            app.messageIsError = undefined
            app.messageKey = ""
        }, 3_000)
    })
    const addItem = $(async (entity, entityType, quantity) => {

        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post("order/addItem", {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "quantity": quantity,
                    "userGuid": session?.value.user.guid
                })
                app.cart = await cart.cart
                trigger("cartChanged")
                handelMessage("addItemSuccessMessage")
                return cart
            } catch (error) {
                handelMessage("addItemErrorMessage")
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem("cart")
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    newOrderLines = [...existingOrderLines.map(existingOrderLine => {
                        if (existingOrderLine.entityGuid == entity.guid) {
                            const newQuantity = existingOrderLine.quantity + 1
                            const newTotalPrice = (entity?.relatedItems?.price?.amount || 0) * newQuantity
                            handelMessage("addItemSuccessMessage")
                            return {
                                entityType: entityType,
                                entityGuid: entity.guid,
                                quantity: newQuantity,
                                price: (entity.relatedItems.price?.amount || 0),
                                totalPrice: (newTotalPrice || 0),
                                relatedItems: {
                                    entity: entity
                                }
                            }
                        } else {
                            handelMessage("addItemSuccessMessage")
                            return existingOrderLine
                        }
                    })]
                } else {
                    newOrderLines = [...existingOrderLines, {
                        entityType: entityType,
                        entityGuid: entity.guid,
                        quantity: 1,
                        price: (entity.relatedItems?.price?.amount || 0),
                        totalPrice: (entity.relatedItems?.price?.amount || 0),
                        relatedItems: {
                            entity: entity
                        }
                    }]
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalPrice: (newTotalPrice || 0),
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        }
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem("cart", JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem("cart")))
                trigger("cartChanged")
                handelMessage("addItemSuccessMessage")
                return { cart: JSON.parse(localStorage.getItem("cart")) }
            } else {
                const newCart = {
                    order: {
                        totalPrice: (entity.relatedItems?.price?.amount || 0),
                        relatedItems: {
                            itemsCount: 1
                        }
                    },
                    orderLines: [
                        {
                            entityType: entityType,
                            entityGuid: entity.guid,
                            quantity: 1,
                            price: (entity.relatedItems?.price?.amount || 0),
                            totalPrice: (entity.relatedItems?.price?.amount || 0),
                            relatedItems: {
                                entity: entity
                            }
                        }
                    ]
                }
                localStorage.setItem("cart", JSON.stringify(newCart))
                trigger("cartChanged")
                handelMessage("addItemSuccessMessage")
                return { cart: JSON.parse(localStorage.getItem("cart")) }
            }
        }
    })

    const removeItem = $(async (entity, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post("order/removeItem", {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
                trigger("cartChanged")
                handelMessage("removeItemSuccessMessage")
                app.cart = await cart.cart
                return cart
            } catch (error) {
                handelMessage("removeItemErrorMessage")
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem("cart")
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    newOrderLines = existingOrderLines.filter(existingOrderLine => existingOrderLine.entityGuid != entity.guid)
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalQuantity: newTotalQuantity,
                        totalPrice: (newTotalPrice || 0),
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        }
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem("cart", JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem("cart")))
                trigger("cartChanged")
                handelMessage("removeItemSuccessMessage")
                return { cart: JSON.parse(localStorage.getItem("cart")) }
            }
        }
    })

    const increaseQuantity = $(async (entity, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post("order/increaseQuantity", {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
                trigger("cartChanged")
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem("cart")
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    newOrderLines = [...existingOrderLines.map(existingOrderLine => {
                        if (existingOrderLine.entityGuid == entity.guid) {
                            const newQuantity = existingOrderLine.quantity + 1
                            const newTotalPrice = (entity.relatedItems?.price?.amount || 0) * newQuantity
                            handelMessage("addItemSuccessMessage")
                            return {
                                entityType: entityType,
                                entityGuid: entity.guid,
                                quantity: newQuantity,
                                price: (entity.relatedItems?.price?.amount || 0),
                                totalPrice: (newTotalPrice || 0),
                                relatedItems: {
                                    entity: entity
                                }
                            }
                        } else {
                            handelMessage("removeItemSuccessMessage")
                            return existingOrderLine
                        }
                    })]
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalPrice: (newTotalPrice || 0),
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        },
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem("cart", JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem("cart")))
                trigger("cartChanged")
                handelMessage("addItemSuccessMessage")
                return { cart: JSON.parse(localStorage.getItem("cart")) }
            }
        }
    })

    const decreaseQuantity = $(async (entity, entityType) => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post("order/decreaseQuantity", {
                    "entityGuid": entity.guid,
                    "entityType": entityType,
                    "userGuid": session?.value.user.guid
                })
                trigger("cartChanged")
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            let cart = null
            cart = localStorage.getItem("cart")
            if (cart) {
                const existingCart = JSON.parse(cart)
                const existingOrder = existingCart.order
                const existingOrderLines = existingCart.orderLines
                const existingOrderLineForEntity = existingOrderLines.find(orderLine => orderLine.entityGuid === entity.guid)
                let newOrderLines = []
                if (existingOrderLineForEntity) {
                    if (existingOrderLineForEntity.quantity == 1) {
                        newOrderLines = existingOrderLines.filter(existingOrderLine => existingOrderLine.entityGuid != entity.guid)

                    } else {
                        newOrderLines = [...existingOrderLines.map(existingOrderLine => {
                            if (existingOrderLine.entityGuid == entity.guid) {
                                const newQuantity = existingOrderLine.quantity - 1
                                const newTotalPrice = (entity.relatedItems?.price?.amount || 0) * newQuantity
                                return {
                                    entityType: entityType,
                                    entityGuid: entity.guid,
                                    quantity: newQuantity,
                                    price: (entity.relatedItems?.price?.amount || 0),
                                    totalPrice: (newTotalPrice || 0),
                                    relatedItems: {
                                        entity: entity
                                    }
                                }
                            } else {
                                return existingOrderLine
                            }
                        })]
                    }
                }
                let newTotalQuantity = 0
                let newTotalPrice = 0
                newOrderLines.map(orderLine => {
                    newTotalQuantity += orderLine.quantity
                    newTotalPrice += orderLine.totalPrice
                }
                )
                const newCart = {
                    order: {
                        totalPrice: (newTotalPrice || 0),
                        relatedItems: {
                            itemsCount: newTotalQuantity
                        }
                    },
                    orderLines: newOrderLines
                }
                localStorage.setItem("cart", JSON.stringify(newCart))
                console.log(JSON.parse(localStorage.getItem("cart")))
                trigger("cartChanged")
                return { cart: JSON.parse(localStorage.getItem("cart")) }
            }
        }
    })
    const removeCart = $(async () => {
        if (session?.value && session?.value?.user?.guid) {
            try {
                const cart = await post("order/removeCart", {
                    "userGuid": session?.value.user.guid
                })
                trigger("cartChanged")
                handelMessage("")
                return cart
            } catch (error) {
                console.log(error)
            }
        } else {
            cart = localStorage.getItem("cart")
            if (cart) {
                localStorage.removeItem("cart")
                trigger("cartChanged")
                handelMessage("")
                return { cart: JSON.parse(localStorage.getItem("cart")) }
            }
        }
    })

    const addOrIncreaseHandler = $(async (entity, quantity) => {
        if (app.cart?.orderLines?.find(orderLine => orderLine?.entityGuid == entity.guid) != null) {
            const newCart = await increaseQuantity(entity, entity?.relatedItems?.entityType)
            app.cart = await newCart.cart
        }
        else {
            const newCart = await addItem(entity, entity?.relatedItems?.entityType)
            app.cart = await newCart.cart
        }
    })

    const deleteOrDecreaseHandler = $(async (entity, quantity) => {
        if (app.cart?.orderLines?.find(orderLine => orderLine?.entityGuid == entity.guid) != null) {
            const newCart = await decreaseQuantity(entity, entity?.relatedItems?.entityType)
            app.cart = await newCart.cart
        }
        else {
            const newCart = await removeItem(entity, entity?.relatedItems?.entityType)
            app.cart = await newCart.cart
        }
    })

    return {
        addItem,
        addOrIncreaseHandler,
        app,
        decreaseQuantity,
        deleteOrDecreaseHandler,
        increaseQuantity,
        removeCart,
        removeItem,
    }
}

export default useOrderActions
