import * as actions from './actionType';
import axios from 'axios';
import { postApi } from '../utils/constants';

export const onAddData = (item) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }

    return {
        type: actions.ADD_ITEM,
        payload: item
    }
}

export const onDelete = (id) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }

    return {
        type: actions.REMOVE_ITEM,
        payload: id
    }
}


export const openModal = (modal) => {
    return {
        type: actions.OPEN_MODAL,
        payload: modal
    }
}

export const onPostRequest = (user) => {
    return (dispatch) => {
        // axios.post(postApi, JSON.stringify(user)).then(res => {

        //     console.log('post request success');
        //     console.log(res);
        //     dispatch(
        //         ((data) => {
        //             return {
        //                 type: actions.POST_USERS,
        //                 payload: {
        //                     response: data
        //                 }
        //             }
        //         })(res.data)
        //     )
        // }).catch(err => console.log(err));

        //local storage (clear(), removeItem()) (getItem())
        window.sessionStorage.setItem('user', JSON.stringify(user));//key value pair
        return {
            type: actions.POST_USERS,
            payload: {
                response: user
            }
        }
    }
}

//post the email

// https method : get post , post/id, delete


// const fun = () => (dispatch) => {
    // services = data.services

    // dispatch(
    //     return {
    //         type:'', 
    //         payload: services
    //     }
    // })

// }



// const fun = () => (dispatch) => {
 
    // axios.get(url).then(res => {
    //     dispatch(
    //         (data => {
    //             return {
    //                 type: '',
    //                 payload: {

    //                 }
    //             }
    //         })(res.data)
    //     )
    // }).catch();

// }

