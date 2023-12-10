import React from "react";
import { View } from "react-native";
import { SpacerProps } from "../utils/types";

const Spacer: React.FC<SpacerProps> = ({ width = 0, height = 0 }) => {
    return <View style={{ width, height }} />;
};

Spacer.defaultProps = {
    width: 0,
    height: 0,
};

export default Spacer;
