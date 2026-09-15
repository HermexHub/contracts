export interface InventoryCompensationPayload {
	orderId: string
	reservationId?: string
	reason: string
	compensatedAt: string
}
