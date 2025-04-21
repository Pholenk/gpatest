import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';
import {Home} from '@templates';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const HomeMenu = [
    {
      label: 'Task',
      onMenuPress: () => navigation.navigate('Task'),
    },
  ];

  return <Home menu={HomeMenu} />;
};
