export interface OrderItemPayload {
	productId: string
	quantity: number
	price: number
}

export interface OrderCreatedPayload {
	orderId: string
	userId: string
	items: OrderItemPayload[]
	totalAmount: number
	currency: string
}
