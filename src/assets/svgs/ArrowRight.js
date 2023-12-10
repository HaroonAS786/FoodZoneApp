import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRight = (props) => (
    <Svg
        width={12}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
            fill="white"
        />
    </Svg>
);
export default ArrowRight;
