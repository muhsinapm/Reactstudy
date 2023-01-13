
function reducer (state , action ){
  
    switch (action) {
        case "Increment":
            return {
                ...state,
                value: state.value + 1,
            };
            case "Decrement":
                return {
                    ...state,
                    value: state.value - 1,
            };
            case "green":
                return {
                    ...state,
                    color:"green",
            };
            case "red":
                return {
                    ...state,
                    color:"red",
            };
        default:
            return state;
        
        
    }
}


export default reducer;