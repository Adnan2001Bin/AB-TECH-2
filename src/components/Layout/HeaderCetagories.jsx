
function HeaderCetagories(props) {
  return (
    <button onClick={props.onClickCetagories} className="mx-10 text-lg font-Myfont font-normal flex items-center">
      Categories
      <img className="w-3 mx-2 mt-1 " src="public\assets\Basic\arrow-down-sign-to-navigate.png" alt="" />
    </button>
  );
}

export default HeaderCetagories;