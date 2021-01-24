const initialState = {
    resident: {},
    residentLogin: false
}

const residentLoginReducer = (state=initialState, action) => {
    switch(action.type) {
        case "RESIDENT_LOGIN":
            return {
                ...state,
                resident: action.resident,
                residentLogin: true
            }
        case "RESIDENT_LOGOUT":
            return {
                ...state,
                resident: {},
                residentLogin: false
            }
        default:
            return state
    }
}

export default residentLoginReducer
