import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, SET_ERROR } from '../actions/index'


export const initialState = {
    smurfData: [],
    isFetching: false,
    errorMessage: ''
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true,
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                smurfData: action.payload,
                isFetching: false 
            });
        case(FETCH_FAIL):
            // Explanation for what is passed to smurfData below: In order to show the user a fetch fail occurred, the err received from the fetch fail is passed into an object, with the error message (action.payload.message) being passed as a value for a 'name' key.  This inclusion of the error message in a 'name' key allows the Smurf component (which renders with a smurf.name as the title of the card) to show this fetch error message as the title of a Smurf card with an indicator to try loading the page again when a fetch error occurs
            return({
                ...state,
                smurfData: [{name: (action.payload.message+': Please Try Loading Page Again'), fullErrorMessage: action.payload, id: Date.now()}],
                isFetching: false
            });
        case(ADD_SMURF):
            return({
                ...state,
                smurfData: [...state.smurfData, action.payload],
                errorMessage: ''
            });
        case(SET_ERROR):
            return({
                ...state,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.