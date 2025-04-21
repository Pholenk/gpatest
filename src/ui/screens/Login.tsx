import {useState} from 'react';
import {Login} from '@templates';
import {useStorage} from '@hooks';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_result, setLocalStorage] = useStorage('lastLogin');

  const handleOnChange = (key: string, value: string) => {
    console.log(key, value);

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

    console.log('login', email, password);
    if (validateForm()) {
      setLocalStorage(`${now}`);
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
