import {Icon} from '@/types/icon';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Search: React.FC<Icon> = ({
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
      testID="SearchIcon">
      <Path d="M779.38-153.85 528.92-404.31q-30 25.54-69 39.54t-78.38 14q-96.1 0-162.67-66.53-66.56-66.53-66.56-162.57 0-96.05 66.53-162.71 66.53-66.65 162.57-66.65 96.05 0 162.71 66.56Q610.77-676.1 610.77-580q0 41.69-14.77 80.69t-38.77 66.69l250.46 250.47zM381.54-390.77q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42t-54.81-134.42q-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42t54.81 134.42q54.8 54.81 134.42 54.81" />
    </Svg>
  );
};
