import React, {FC} from 'react';
import {LoginForm} from '@organisms';
import {Text, View} from 'react-native';
import {LoginTemplateStyle} from './LoginTemplateStyle';

export interface LoginProps {
  values: {
    email: string;
    password: string;
  };
  onChangeText?: (key: string, value: string) => void;
  onLogin?: () => void;
}

export const Login: FC<LoginProps> = props => {
  const styles = LoginTemplateStyle;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>HarvestHub</Text>
      <LoginForm
        valueCollections={props.values}
        onChangeText={props.onChangeText}
        onPressLogin={props.onLogin}
      />
    </View>
  );
};
