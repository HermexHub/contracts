export interface FailedItemPayload {
	productId: string
	requestedQuantity: number
	availableQuantity: number
}

export interface InventoryFailedPayload {
	orderId: string
	userId: string
	reason: string
	failedItems: FailedItemPayload[]
	failedAt: string
}
