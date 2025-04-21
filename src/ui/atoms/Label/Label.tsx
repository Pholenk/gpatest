import React, {FC, useCallback} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {LabelStyle} from './LabelStyle';

export interface LabelProps {
  tooltip?: boolean;
  onTooltipPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  children: string;
}

export const Label: FC<LabelProps> = props => {
  const styles = LabelStyle;

  const RenderTooltip = useCallback(() => {
    if (props?.tooltip) {
      return (
        <TouchableOpacity onPress={props?.onTooltipPress}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>?</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return null;
  }, [
    props?.onTooltipPress,
    props?.tooltip,
    styles.tooltip,
    styles.tooltipText,
  ]);

  return (
    <View style={[props?.containerStyle, styles.container, styles.row]}>
      <Text style={[props?.labelStyle, styles.label]}>{props.children}</Text>
      <RenderTooltip />
    </View>
  );
};
