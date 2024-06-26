export default function reducer(state, action) {
    switch (action.type) {
        case 'currency/set':
            return {
                ...state,
                currency: action.payload
            };
        
        default:
            return state;
    }
}