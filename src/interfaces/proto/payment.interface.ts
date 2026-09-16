import * as path from 'path'
import { PaymentScenario } from '../../enums/payment-scenario.enum'

export interface GetPaymentSessionRequest {
	orderId: string
}

export interface GetPaymentSessionResponse {
	paymentId: string
	orderId: string
	userId: string
	amount: number
	currency: string
	status: string
	failureReason?: string
	createdAt: string
	updatedAt?: string
}

export interface ConfirmPaymentRequest {
	orderId: string
	cardNumber: string
	cardHolder: string
	expiry: string
	cvv: string
	scenario?: PaymentScenario | string
	idempotencyKey?: string
}

export interface ConfirmPaymentResponse {
	paymentId: string
	orderId: string
	status: string
	amount: number
	currency: string
	failureReason?: string
	processedAt: string
}

export const PAYMENT_PACKAGE_NAME = 'hermex.payment'
export const PAYMENT_SERVICE_NAME = 'PaymentGrpcService'
export const PAYMENT_PROTO_PATH = path.resolve(
	__dirname,
	'../../../proto/payment.proto'
)

export const PAYMENT_GRPC_METHODS = {
	GET_PAYMENT_SESSION: 'GetPaymentSession',
	CONFIRM_PAYMENT: 'ConfirmPayment'
} as const

export type PaymentGrpcMethod =
	(typeof PAYMENT_GRPC_METHODS)[keyof typeof PAYMENT_GRPC_METHODS]
