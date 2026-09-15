export enum RabbitQueues {
	// Order Service queues
	ORDER_INVENTORY_EVENTS = 'order.inventory.events.queue',
	ORDER_PAYMENT_EVENTS = 'order.payment.events.queue',
	ORDER_EXPIRATION_WAIT = 'order.expiration.wait.queue',
	ORDER_EXPIRATION_DEAD = 'order.expiration.dead.queue',

	// Inventory Service queues
	INVENTORY_ORDER_EVENTS = 'inventory.order.events.queue',
	INVENTORY_PAYMENT_EVENTS = 'inventory.payment.events.queue',

	// Payment Service queues
	PAYMENT_INVENTORY_EVENTS = 'payment.inventory.events.queue',

	// Notification & Analytics Service queues
	NOTIFICATION_EVENTS = 'notification.events.queue',

	// Dead Letter Queue
	DEAD_LETTER = 'hermex.dead.letter.queue'
}
