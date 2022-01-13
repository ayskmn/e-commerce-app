export const initialState =  {
	cart: [],
	user: null
}

export const getCartTotal = (cart) => {
	return cart?.reduce((amount, item) => item.price + amount, 0)};


const reducer = (state, action) => {
	console.log(state.cart)
	console.log(action.item)
	console.log(state)

	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.item]
			}
		case 'REMOVE_FROM_CART':		
			const filteredItems = state.cart.filter(item => item.id !== action.id)
			return {
				...state,
				cart: filteredItems,
			}
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		default:
			return state;
	}
}

export default reducer;
