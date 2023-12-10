import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PhoneDownArrow = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 6.66675V9.8334L10 13.6667L5 9.8334V6.66675L10 10.5001L15 6.66675Z"
      fill="#5E5E5E"
    />
  </Svg>
);
export default PhoneDownArrow;
