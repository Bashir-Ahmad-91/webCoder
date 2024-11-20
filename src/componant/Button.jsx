/* eslint-disable react/prop-types */

import './button.css'
function Button(props) {
  return (
    <div>
        <button className={`${props.className} py-2 px-4   text-white bg-[#c6a953cc] font-bodyFont rounded-md text-2xl relative shadow-md`}>{props.children}</button>
    </div>
  )
}

export default Button