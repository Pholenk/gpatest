import {Text, TouchableOpacity, View} from 'react-native';
import {HomeStyles} from './HomeStyle';
import {FC, useCallback} from 'react';

export type HomeMenu = {
  label: string;
  onMenuPress: () => void;
};

export interface HomeProps {
  menu: HomeMenu[];
}

export const Home: FC<HomeProps> = props => {
  const styles = HomeStyles;

  const RenderButtonMenu = useCallback(
    ({label, onMenuPress}: HomeMenu) => {
      return (
        <TouchableOpacity
          onPress={onMenuPress}
          style={styles.buttonMenu}
          key={`${label}${Math.random()}`}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
      );
    },
    [styles.buttonMenu, styles.buttonLabel],
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>{props.menu.map(RenderButtonMenu)}</View>
    </View>
  );
};
