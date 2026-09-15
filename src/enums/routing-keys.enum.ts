export enum OrderRoutingKeys {
	CREATED = 'order.created',
	CANCELLED = 'order.cancelled',
	EXPIRED = 'order.expired'
}

export enum InventoryRoutingKeys {
	RESERVED = 'inventory.reserved',
	FAILED = 'inventory.failed',
	COMPENSATED = 'inventory.compensation.completed'
}

export enum PaymentRoutingKeys {
	SUCCEEDED = 'payment.succeeded',
	FAILED = 'payment.failed'
}

export enum NotificationRoutingKeys {
	BROADCAST = 'notification.broadcast'
}
