//root reducer is used to combine all reducers together to bring data into store
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
//defaults to local storage, user sessionStorage for session storage object
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    //whitelist is array containing string names of reducers to store in local storage
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);