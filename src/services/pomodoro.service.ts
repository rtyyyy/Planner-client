import {
	IPomodoroSessionResponse,
	TypePomodoroRoundState,
	TypePomodoroSessionState
} from '@/types/pomodoro.types'

import { axiosWithAuth } from '@/api/interceptors'

class PomodoroService {
	private BASE_URL = '/user/timer'
    //коннект к серверу и получение текущей сессии
	async getTodaySession() {
		const response = await axiosWithAuth.get<IPomodoroSessionResponse>(
			`${this.BASE_URL}/today`
		)
		return response
	}
    //создаём сессию 
	async createSession() {
		const response = await axiosWithAuth.post<IPomodoroSessionResponse>(
			this.BASE_URL
		)
		return response
	}

	async updateSession(id: string, data: TypePomodoroSessionState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosWithAuth.put(
			`${this.BASE_URL}/round/${id}`,
			data
		)
		return response
	}
}

export const pomodoroService = new PomodoroService()
