const initialState = {
    age:21,
    fname:"No Name."
}
// The first parameter takes a default value if it is null. 
const reducer = (state = initialState, action) => {
    // Make copy of state. 
    const newState = {...state}

    switch(action.type) {
        case 'AGE_UP':
            newState.age++;
            break;
        case 'AGE_DOWN':
            newState.age--;
            break;  
        case 'CHANGE_FIRSTNAME': newState.fname = action.payload;
        break;
    
    
    }
    return newState;
}
export default reducer;
