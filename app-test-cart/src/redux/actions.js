import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  addToCart: ['product', 'quantity'],
  changeName: ['name']
}); 



export  { Types };
export default Creators;