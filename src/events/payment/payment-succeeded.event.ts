export interface PaymentSucceededPayload {
	paymentId: string
	orderId: string
	userId: string
	amount: number
	currency: string
	idempotencyKey: string
	processedAt: string
}
