import {FETCH_POSTS, FETCH_POST} from '../Actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POST:
            return action.payload;
    }
    return state;
}
