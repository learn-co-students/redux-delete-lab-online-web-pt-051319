import { v4 as uuidv4 } from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    	const band = {
    		name: action.name,
    		id: uuidv4()
    	}
    	return { bands: [...state.bands, band] }
  	case 'DELETE_BAND':
  		return { bands: [...state.bands].filter(band => band.id !== action.id) }
    default:
      return state;
  }
};
