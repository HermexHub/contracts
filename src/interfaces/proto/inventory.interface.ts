import * as path from 'path'

export interface ProductItemMessage {
	id: string
	name: string
	sku: string
	price: number
	stockQuantity: number
	createdAt: string
	updatedAt: string
	description?: string
	category?: string
	imageUrl?: string
	brand?: string
	rating?: number
	reviewsCount?: number
	warrantyMonths?: number
	specsJson?: string
	images?: string[]
	badge?: string
	model?: string
	oldPrice?: number
	color?: string
	colorHex?: string
	weightGrams?: number
	descriptionJson?: string
	maxOrderQuantity?: number
}

export interface PaginationMetaMessage {
	page: number
	limit: number
	totalItems: number
	totalPages: number
	hasNextPage: boolean
	hasPreviousPage: boolean
}

export interface GetProductsRequest {
	page: number
	limit: number
	inStockOnly?: boolean
	search?: string
	sortBy?: string
	sortOrder?: string
	category?: string
	brand?: string
	specsFilterJson?: string
}

export interface GetProductsResponse {
	items: ProductItemMessage[]
	meta: PaginationMetaMessage
}

export interface GetProductByIdRequest {
	id: string
}

export interface GetProductByIdResponse {
	product: ProductItemMessage
}

export interface CartItemInput {
	productId: string
	quantity: number
	expectedPrice?: number
}

export interface ValidateCartRequest {
	items: CartItemInput[]
}

export type CartStockStatus =
	| 'IN_STOCK'
	| 'LOW_STOCK'
	| 'OUT_OF_STOCK'
	| 'PARTIALLY_AVAILABLE'

export interface CartItemValidationResult {
	productId: string
	name: string
	sku: string
	currentPrice: number
	expectedPrice?: number
	priceChanged: boolean
	requestedQuantity: number
	availableQuantity: number
	effectiveQuantity: number
	stockStatus: CartStockStatus | string
	itemTotal: number
	hasIssue: boolean
	issueReason?: string
}

export interface ValidateCartResponse {
	isValid: boolean
	canProceed: boolean
	items: CartItemValidationResult[]
	subtotal: number
	currency: string
}

export const INVENTORY_PACKAGE_NAME = 'hermex.inventory'
export const INVENTORY_SERVICE_NAME = 'InventoryGrpcService'
export const INVENTORY_PROTO_PATH = path.resolve(
	__dirname,
	'../../../proto/inventory.proto'
)

export const INVENTORY_GRPC_METHODS = {
	GET_PRODUCTS: 'GetProducts',
	GET_PRODUCT_BY_ID: 'GetProductById',
	VALIDATE_CART: 'ValidateCart'
} as const

export type InventoryGrpcMethod =
	(typeof INVENTORY_GRPC_METHODS)[keyof typeof INVENTORY_GRPC_METHODS]
