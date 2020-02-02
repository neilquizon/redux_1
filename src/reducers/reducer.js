const initialState = {
    age:21
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
    }
    return newState;
}
export default reducer;
