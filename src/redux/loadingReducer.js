const SET_LOADING_REDUCER = "SET_LOADING_REDUCER"

let initialState = {
    isLoading: false
}

let loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_REDUCER:
            return {
                ...state,
                isLoading: action.loading,
            }
        default:
            return state
    }
}

export let setLoadingReducer = (loading) => ({type: SET_LOADING_REDUCER, loading})

export default loadingReducer