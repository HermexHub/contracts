export interface CreateOrderItemDto {
	productId: string
	quantity: number
	price: number
}

export interface CreateOrderDto {
	items: CreateOrderItemDto[]
	deliveryAddress?: string
}

export interface OrderResponseDto {
	id: string
	userId: string
	status: string
	totalAmount: number
	currency: string
	items: CreateOrderItemDto[]
	createdAt: string
	updatedAt: string
}
