
function SmartPhone(props) {
    return (
      <button onClick={props.onShowPhoneCatagories} className="mx-10 text-lg font-Myfont font-normal flex items-center">
        Smart Phone
        <img className="w-3 mx-2 mt-1 " src="assets\Basic\arrow-down-sign-to-navigate.png" alt="" />
      </button>
    );
  }
  
  export default SmartPhone;