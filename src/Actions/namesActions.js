import { ADD_BOY } from "../Constants/namesConstants";
import { ADD_GIRL } from "../Constants/namesConstants"

export const actionAddBoy = boyName => {
    return {
        type: ADD_BOY,
        payload: boyName,
    };
}

export const actionAddGirl = girlName => {
    return {
        type: ADD_GIRL,
        payload: girlName,
    };
}