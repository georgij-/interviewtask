import { useState } from "react";
import { MdCheck } from "react-icons/md";

function ColorCircle(props) {

  const [click, setClick] = useState(false);

  return (
    <div onClick={() => setClick(!click)} className={`rounded-full w-[64px] h-[64px] m-[2px] flex justify-center items-center transition outline outline-2 outline-gray-200 hover:outline-gray-500 hover:outline-2 animate-fade ${props.background}`}>
      {click ? <span className='animate-fade transition'><MdCheck /></span> : ""}
    </div>
  );
}
export default ColorCircle;
