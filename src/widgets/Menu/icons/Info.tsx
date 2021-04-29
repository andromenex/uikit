import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
    //   />
    // </Svg>
    <Svg viewBox="0 0 24 24" width="24px" color="text" {...props}>
      <path stroke="black" d="M 19.42,12.00
           C 19.42,16.10 16.10,19.42 12.00,19.42
             7.90,19.42 4.58,16.10 4.58,12.00
             4.58,7.90 7.90,4.58 12.00,4.58
             16.10,4.58 19.42,12.00 19.42,12.00 Z" />
    </Svg>
  );
};

export default Icon;
