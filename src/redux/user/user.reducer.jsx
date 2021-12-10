//set initial state since there will be no state when app first loads
const INITIAL_STATE = {
    currentUser: null
}

//reducer receives current state and action. If state being passed is not set, it will be initialized to INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
    //switch used to check action type and update state if, if not match action type, retrun current existing state
    //this is required as all reducers receive all actions that get fired. even if they are not related to this reducer
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                //always spread in state before updating specific prop so component will re-render with this nerw object
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;