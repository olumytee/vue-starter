/* eslint-disable */
import * as JwtDecode from 'jwt-decode'
// initial state
const state = {
	loggedInUser: null,
	loggedInStatus: false
}

// getters
const getters = {
	loggedInStatus: state => state.loggedInStatus
}

// actions
const actions = {
	logout ({ commit }) {
		window.localStorage.removeItem('userObject')
		commit(LOGOUT)
	},
	login ({ commit, state }, token) {
		const user = JwtDecode(token)
		window.localStorage.setItem('userObject', user)
		commit(LOGIN, user)
	}
}

// mutations
const mutations = {
	LOGOUT (state) {
		state.loggedInStatus = null
	},

	LOGIN (state, { user }) {
		state.loggedInUser = user
		state.loggedInStatus = true
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
