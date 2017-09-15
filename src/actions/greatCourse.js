import {GREAT_COURSE} from "../constants"

export const greatCourse=(text)=>{
    const action={
        type:'GREAT_COURSE',
        text
    }
    console.log('action in greatCourse',action);
    return action;
}