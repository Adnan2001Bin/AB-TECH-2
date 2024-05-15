import { useContext ,useEffect ,useState} from "react"
import CartContext from "../../Store/cart-context"
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext)
    
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber , item) =>{
        return curNumber + item.amount
    } , 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
          }, 300);
      
          return () => {
            clearTimeout(timer);
          };
    }, [items])

    return <div>
        <button onClick={props.onClick} className={`w-52 text-white bg-black border border-black hover:bg-gray-600 rounded-full h-14 flex items-center ${btnClasses}`}>

            <span className="w-6 ml-6 ">
                <img className="" src="src\assets\icons8-shopping-cart-50.png" alt="" />
            </span>
            <span className="ml-3 font-Myfont text-xl">Your Cart</span>
            <span className="ml-2 font-Myfont text-xl text-black bg-white rounded-xl w-8">
                {numberOfCartItems}

            </span>
        </button>
    </div>
}

export default HeaderCartButton
