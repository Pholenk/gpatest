import React, {FC, useCallback} from 'react';
import {Text, View} from 'react-native';
import {LoginFormStyles} from './LoginFormStyle';
import {Person, RightCircle} from '@assets';
import {FormInputTextGroup} from '@molecules';
import {ButtonIcon} from '@atoms';

export interface LoginFormProps {
  onPressLogin?: () => void;
  onChangeText?: (key: string, value: string) => void;
  valueCollections: Record<string, string>;
}

export const LoginForm: FC<LoginFormProps> = props => {
  const styles = LoginFormStyles;

  const ButtonLoginIcon = useCallback(() => <RightCircle color="#FFF" />, []);

  const handleOnChange = (key: string, valueChange: string) => {
    if (typeof props.onChangeText === 'function') {
      props.onChangeText(key, valueChange);
    }
  };

  const handleOnLogin = () => {
    if (typeof props.onPressLogin === 'function') {
      props.onPressLogin();
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.row]}>
        <View style={[styles.headerContent, styles.row]}>
          <Person color="#FFF" />
          <Text style={styles.headerTitle}>Login</Text>
        </View>
      </View>
      <View style={styles.content}>
        <FormInputTextGroup
          label={'Email Address'}
          onChange={(valueChange: string) =>
            handleOnChange('email', valueChange)
          }
          value={props.valueCollections.email}
        />
        <FormInputTextGroup
          label={'Password'}
          secureTextEntry
          onChange={(valueChange: string) =>
            handleOnChange('password', valueChange)
          }
          value={props.valueCollections.password}
        />
      </View>
      <View style={styles.footer}>
        <ButtonIcon
          icon={ButtonLoginIcon}
          buttonLabel={'Log In'}
          onPress={handleOnLogin}
          iconPosition={'Left'}
          buttonStyle={[styles.buttonLogin, styles.row]}
          labelStyle={styles.buttonLoginLabel}
        />
      </View>
    </View>
  );
};
