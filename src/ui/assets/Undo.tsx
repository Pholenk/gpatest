import {Icon} from '@/types/icon';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Undo: React.FC<Icon> = ({
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
      testID="UndoIcon">
      <Path d="M640-120v-480q0-66-47-113t-113-47q-66 0-113 47t-47 113v168l64-64 56 56-160 160-160-160 56-56 64 64v-168q0-100 70-170t170-70q100 0 170 70t70 170v480h-80Z" />
    </Svg>
  );
};
