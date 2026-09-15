import * as path from 'path'

export interface OrderItemMessage {
	productId: string
	quantity: number
	price: number
}

export interface CreateOrderRequest {
	userId: string
	items: OrderItemMessage[]
	deliveryAddress?: string
}

export interface CreateOrderResponse {
	orderId: string
	status: string
	totalAmount: number
	currency: string
	createdAt: string
}

export interface GetOrderRequest {
	orderId: string
}

export interface GetOrderResponse {
	orderId: string
	userId: string
	status: string
	totalAmount: number
	currency: string
	items: OrderItemMessage[]
	deliveryAddress?: string
	createdAt: string
	updatedAt: string
}

export const ORDER_PACKAGE_NAME = 'hermex.order'
export const ORDER_SERVICE_NAME = 'OrderGrpcService'
export const ORDER_PROTO_PATH = path.resolve(__dirname, '../../proto/order.proto')


