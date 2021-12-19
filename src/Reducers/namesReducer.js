import { ADD_BOY, ADD_GIRL } from "../Constants/namesConstants";
const initNames = {
    boys: ['Thom', 'Bob', 'Peter'],
    girls: ['Lin', 'Ann', 'Pepsi']
}

function namesReducer(state = initNames, action) {
    let names = { ...state };
    console.log(action)
    switch (action.type) {
        case ADD_BOY:
            const newBoys = [...state.boys];
            newBoys.push(action.payload);
            names = {
                ...state,
                boys: newBoys,
            }
            break;
        case ADD_GIRL:
            const newGirls = [...state.girls];
            newGirls.push(action.payload);
            names = {
                ...state,
                girls: newGirls,
            }
            break
        default:
    }

    console.log(names)

    return names;
}

export default namesReducer;