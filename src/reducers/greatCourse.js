import {GREAT_COURSE} from "../constants"

const courses=(action)=>{
    return{
        type:action.text,
        id: Math.random()
    }
}

export const course=(state=[],action)=>{
    let course=null;
    switch (action.type){
        case GREAT_COURSE:
            course=[...state,course(action)]
            console.log('action in course',course)
            return action;
        default:
            return state;
    }
}