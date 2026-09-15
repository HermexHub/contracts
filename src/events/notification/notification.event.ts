export type NotificationType =
	| 'ORDER_CREATED'
	| 'ORDER_CONFIRMED'
	| 'ORDER_CANCELLED'
	| 'INVENTORY_FAILED'
	| 'PAYMENT_FAILED'

export type NotificationChannel = 'EMAIL' | 'SMS' | 'PUSH' | 'SSE'

export interface NotificationPayload {
	recipientId: string
	type: NotificationType
	channel: NotificationChannel
	title: string
	message: string
	orderId?: string
	metadata?: Record<string, unknown>
	createdAt: string
}
