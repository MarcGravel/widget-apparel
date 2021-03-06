import { UserActionTypes } from "./user.types"

//action required to send to reducer
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})