export interface PaymentFailedPayload {
	orderId: string
	userId: string
	amount: number
	currency: string
	reason: string
	idempotencyKey?: string
	failedAt: string
}
