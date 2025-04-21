import {Icon} from '@/types/icon';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ChevronDown: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#000000',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 -240 960 960"
      testID="ChevronDownIcon">
      <Path d="M380.5161 350 674.5161 56Q689.5161 41 709.5161 41.5T744.5161 57Q759.5161 72 759.5161 92T744.5161 127L437.5161 435Q425.5161 447 410.5161 453T380.5161 459Q365.5161 459 350.5161 453T323.5161 435L15.5161 127Q.5161 112 1.0161 91.5T16.5161 56Q31.5161 41 51.5161 41T86.5161 56L380.5161 350Z" />
    </Svg>
  );
};
