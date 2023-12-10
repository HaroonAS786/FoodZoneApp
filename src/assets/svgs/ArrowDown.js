import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const ArrowDown = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_1748_2463)">
            <Path
                d="M6 10.41L7.41 9L12 13.58L16.59 9L18 10.41L12 16.41L6 10.41Z"
                fill="#272727"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1748_2463">
                <Rect width={24} height={24} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ArrowDown;
