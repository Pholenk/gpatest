import React, {FC, useState} from 'react';
import {Login} from '@templates';
import {useStorage} from '@hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';
import {SCREEN_NAME} from '@navigation';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen: FC<LoginScreenProps> = ({
  navigation,
}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_result, setLocalStorage] = useStorage('lastLogin');

  const handleOnChange = (key: string, value: string) => {
    switch (key) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const emailRegEx = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/gi;
    return emailRegEx.test(email) && password.length > 0;
  };

  const handleOnLogin = () => {
    const now = new Date();

    if (validateForm()) {
      setLocalStorage(`${now}`);
      navigation.navigate(SCREEN_NAME.HOME);
    }
  };

  return (
    <Login
      onChangeText={handleOnChange}
      onLogin={handleOnLogin}
      values={{email, password}}
    />
  );
};
