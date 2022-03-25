import { INIT_STORE, SET_CHECK } from "./actiontype"

const initialState = {}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INIT_STORE:
			return { ...action.data }
		case SET_CHECK:
			const info = action.data
			const temp = { ...state }
			temp[info.key1][info.key2].checked =
				!temp[info.key1][info.key2].checked
			return { ...temp }
		default:
			return state
	}
}
