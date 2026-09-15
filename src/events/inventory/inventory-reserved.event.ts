export interface ReservedItemPayload {
	productId: string
	quantity: number
	price: number
}

export interface InventoryReservedPayload {
	orderId: string
	reservationId: string
	userId: string
	items: ReservedItemPayload[]
	totalAmount: number
	currency: string
	reservedAt: string
}
