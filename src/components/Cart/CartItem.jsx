import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateItem } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={e => setCount(e.target.value)}
          onKeyDown={e => {
              const {value} = e.target;
              setCount(value);
              if(e.key === "Enter"){
                if(+value < 1)dispatch(removeFromCart(item.id))
                else dispatch(updateItem({id: item.id, count: +value}))
              }
            }
          }
        />
        <button
          className="cart-item-button"
          onClick={() => setCount(prevCount => {
              prevCount += 1;
              dispatch(updateItem({id: item.id, count: prevCount}))
              return prevCount
            })
          }
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => setCount(prevCount => {
            prevCount -= 1;
            if (prevCount < 1) dispatch(removeFromCart(item.id))
            else dispatch(updateItem({id: item.id, count: prevCount}))
            return prevCount
          })}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
