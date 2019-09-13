

const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";

const SET_BREND = 'SET_BREND';
const SET_WEIGHT = 'SET_WEIGHT';
const SET_REZULT = 'SET_REZULT';
let initialState = {
    
    brends: [
      
        
        ],
   
    isFetching: false
}


const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case SET_BREND: {
            return { ...state, brends: action.brends }
        }
        case SET_WEIGHT: {
            return { ...state.brends,
                 weight : state.brends.map ( w=>{
                    
                        return {...w, weight:action.weight}
                       
                       })
                    }
        }
        case SET_REZULT: {
            return { ...state.brends,
                result : state.brends.map ( w=>{
                   
                       return {...w, result:action.result}
                      
                      })
                   }
        }
        case TOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
      
        default:
            return state;

    }
}


export const setBrend = (brends) => ({ type: SET_BREND, brends })
export const setWeight = (weight) => ({ type: SET_WEIGHT, weight:weight })
export const setResult = (result) => ({ type: SET_REZULT, result:result })
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching: isFetching })
export default calculatorReducer;