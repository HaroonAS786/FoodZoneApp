import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowLeft = (props) => (
    <Svg
        width={12}
        height={16}
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
            fill="white"
        />
    </Svg>
);
export default ArrowLeft;
