/**
 * Standard gRPC Status Codes matching @grpc/grpc-js status enum
 */
export enum GrpcStatusCode {
	OK = 0,
	CANCELLED = 1,
	UNKNOWN = 2,
	INVALID_ARGUMENT = 3,
	DEADLINE_EXCEEDED = 4,
	NOT_FOUND = 5,
	ALREADY_EXISTS = 6,
	PERMISSION_DENIED = 7,
	RESOURCE_EXHAUSTED = 8,
	FAILED_PRECONDITION = 9,
	ABORTED = 10,
	OUT_OF_RANGE = 11,
	UNIMPLEMENTED = 12,
	INTERNAL = 13,
	UNAVAILABLE = 14,
	DATA_LOSS = 15,
	UNAUTHENTICATED = 16
}

export interface GrpcErrorPayload {
	code?: number | GrpcStatusCode
	details?: string
	message?: string
}

/**
 * Maps standard gRPC status codes to corresponding HTTP status codes
 */
export const GRPC_TO_HTTP_STATUS_MAP: Record<GrpcStatusCode, number> = {
	[GrpcStatusCode.OK]: 200,
	[GrpcStatusCode.CANCELLED]: 499,
	[GrpcStatusCode.UNKNOWN]: 500,
	[GrpcStatusCode.INVALID_ARGUMENT]: 400,
	[GrpcStatusCode.DEADLINE_EXCEEDED]: 504,
	[GrpcStatusCode.NOT_FOUND]: 404,
	[GrpcStatusCode.ALREADY_EXISTS]: 409,
	[GrpcStatusCode.PERMISSION_DENIED]: 403,
	[GrpcStatusCode.RESOURCE_EXHAUSTED]: 429,
	[GrpcStatusCode.FAILED_PRECONDITION]: 412,
	[GrpcStatusCode.ABORTED]: 409,
	[GrpcStatusCode.OUT_OF_RANGE]: 400,
	[GrpcStatusCode.UNIMPLEMENTED]: 501,
	[GrpcStatusCode.INTERNAL]: 500,
	[GrpcStatusCode.UNAVAILABLE]: 503,
	[GrpcStatusCode.DATA_LOSS]: 500,
	[GrpcStatusCode.UNAUTHENTICATED]: 401
}

/**
 * Type guard to check if an unknown error object is a gRPC error
 */
export function isGrpcError(error: unknown): error is GrpcErrorPayload {
	if (!error || typeof error !== 'object') {
		return false
	}
	const err = error as Record<string, unknown>
	return (
		typeof err.code === 'number' &&
		err.code in GrpcStatusCode &&
		(typeof err.details === 'string' || typeof err.message === 'string')
	)
}

/**
 * Returns the corresponding HTTP status code for a given gRPC code
 */
export function grpcStatusToHttpStatus(code?: number): number {
	if (code === undefined || !(code in GRPC_TO_HTTP_STATUS_MAP)) {
		return 500
	}
	return GRPC_TO_HTTP_STATUS_MAP[code as GrpcStatusCode]
}

/**
 * Returns a human-readable name from a gRPC status code
 */
export function getGrpcStatusName(code?: number): string {
	if (code !== undefined && code in GrpcStatusCode) {
		return GrpcStatusCode[code]
	}
	return 'InternalServerError'
}
