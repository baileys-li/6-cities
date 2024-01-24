import { RequestStatus } from '../constants'
import { saveItems, setPending, setRejected, setSuccessWithItems } from './request-status'

describe('request-status helpers', () => {
	describe('Function: saveItems', () => {
		const state = { items: [] }

		it('should save the items', () => {
			const action = { payload: [1, 2, 3], type: 'mockAction' }
			saveItems(state, action)
			expect(state.items).toEqual([1, 2, 3])
		})

		it('should reset state if the payload is empty', () => {
			const action = { payload: [], type: 'mockAction' }
			saveItems(state, action)
			expect(state.items).toEqual([])
		})
	})

	describe('Function: setPending', () => {
		const state = { status: RequestStatus.Idle }
		it('should set the status to pending', () => {
			setPending(state)
			expect(state.status).toBe(RequestStatus.Loading)
		})

		it('should not change the status if it is already pending', () => {
			setPending(state)
			expect(state.status).toBe(RequestStatus.Loading)
		})
	})

	describe('Function: setRejected', () => {
		const state = { status: RequestStatus.Loading }
		it('should set the status to rejected', () => {
			setRejected(state)
			expect(state.status).toBe(RequestStatus.Failed)
		})

		it('should not change the status if it is already rejected', () => {
			setRejected(state)
			expect(state.status).toBe(RequestStatus.Failed)
		})
	})

	describe('Function: setSuccessWithItems', () => {
		it('should save the items and set the status to success', () => {
			const state = { items: [], status: RequestStatus.Loading }
			const action = { payload: [1, 2, 3], type: 'mockAction' }
			setSuccessWithItems(state, action)
			expect(state.items).toEqual([1, 2, 3])
			expect(state.status).toBe(RequestStatus.Success)
		})
	})
})
