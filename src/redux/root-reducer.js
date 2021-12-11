//root reducer is used to combine all reducers together to bring data into store
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
})