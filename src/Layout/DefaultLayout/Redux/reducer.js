// reducer.js

const initialState = {
    isUser: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isUser: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
