import React from 'react'

export function Cards({children}) {
	
	console.log(children)

	const cartsChildren = React.Children.toArray(children).map(enfantsCarts =>	enfantsCarts.children )
	console.log(cartsChildren)

	return 	children
}

export default Cards 
// export function Cart({children}) {
// 	console.log(children)

// 	return 	children
// }