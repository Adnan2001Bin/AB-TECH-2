
function Laptop(props) {
    return (
      <button onClick={props.onShowLaptopCatagories} className="mx-10 text-lg font-Myfont font-normal flex items-center">
        Laptop
        <img className="w-3 mx-2 mt-1 " src="assets\Basic\arrow-down-sign-to-navigate.png" alt="" />
      </button>
    );
  }
  
  export default Laptop;