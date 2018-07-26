import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '../actions/actionTypes';
const initialState = {
  places: [],
  selectedPlace: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat ({
          key: Math.random (),
          name: action.placeName,
          image: {
            uri: 'https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f033882f3c25404e3f904fbfe2351be&w=1000&q=80',
          }
        }),
      };
    case DELETE_PLACE:
      return {
         ...state ,
        places: state.places.filter (place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    case SELECT_PLACE:
      return {};
    case DESELECT_PLACE: {
    }
    default:
      return state;
  }
};
export default reducer;
