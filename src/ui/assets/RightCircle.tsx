import {Icon} from '@/types/icon';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const RightCircle: React.FC<Icon> = ({
  width = 24,
  height = 24,
  color = '#000000',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 -960 960 960"
      testID="RightCircleIcon">
      <Path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </Svg>
  );
};
