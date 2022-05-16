export function addGoodToCart(id) {
    return {
      type: 'ADD_GOOD_TO_CART',
      payload: {
        id: id
      }
    }
}

export function remove(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: id
    }
  }
}