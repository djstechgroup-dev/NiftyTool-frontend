import { INIT_STORE, SET_CHECK } from "./actiontype"

export function initStore(menuData) {
	return {
		type: INIT_STORE,
		data: menuData,
	}
}

export function setCheck(data) {
	return {
		type: SET_CHECK,
		data: data,
	}
}
