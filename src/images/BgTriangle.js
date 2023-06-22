import * as React from "react";
const SvgBgTriangle = (props) => (
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" {...props} id='triangle'>
    <path
      stroke="#000"
      strokeWidth={15}
      fill="none"
      opacity={0.2}
      d="M156.5 262 300 8H13z"
    />
  </svg>
);
export default SvgBgTriangle;

// import * as React from "react";
// const SvgBgTriangle = (props) => (
// <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" {...props} id='triangle'>
//   <path
//     stroke="#000"
//     strokeWidth={15}
//     fill="none"
//     opacity={0.2}
//     d="M0 0 L100 0 L50 100 Z"
//   />
// </svg>

// );
// export default SvgBgTriangle;



