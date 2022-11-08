import * as actions from './actionType';

const initState = {
    employee: [],
    recipe: [],
    modal: false,
    data: [
        {
            name: 2013,
            sales: 4600,
        },
        {
            name: 2014,
            sales: 4700,
        },
        {
            name: 2015,
            sales: 4000,
        },
        {
            name: 2016,
            sales: 4000,
        },
        {
            name: 2017,
            sales: 4000,
        },
        {
            name: 2018,
            sales: 4000,
        },
        {
            name: 2019,
            sales: 4000,
        },
    ],
    postUsers: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.ADD_ITEM:
            console.log(action);
            return { ...state, employee: [...state.employee, action.payload] }
        case actions.REMOVE_ITEM:
            return { ...state, employee: state.employee.filter((info => info.id != action.payload)) }
        case actions.OPEN_MODAL:
            return { ...state, modal: action.payload }
        case actions.POST_USERS:
            // console.log(JSON.parse(action.payload.response));
            return { ...state, postUsers: [...state.postUsers, action.payload.response] }
        default:
            return state;
    }

}

export default reducer;