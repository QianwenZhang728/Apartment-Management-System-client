const initialState = {
    admin: {},
    adminLogin: false
}

const adminLoginReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADMIN_LOGIN":
            return {
                ...state,
                admin: action.admin,
                adminLogin: true
            }
        case "ADMIN_LOGOUT":
            console.log(state.adminLogin)
            return {
                ...state,
                admin: {},
                adminLogin: false
            }
        default:
            return state
    }
}

export default adminLoginReducer
