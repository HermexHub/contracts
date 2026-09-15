export interface BaseEvent<T> {
	eventId: string
	correlationId: string
	timestamp: string
	version?: string
	payload: T
}
