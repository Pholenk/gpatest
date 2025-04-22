import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/types/navigation';
import {FieldScreen, HomeScreen, LoginScreen, TaskScreen} from '@screens';
import {SCREEN_NAME} from './ScreenName';

export * from './ScreenName';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = (props: {
  initialRoute: keyof RootStackParamList | undefined;
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={props.initialRoute}>
        <Stack.Screen
          name={SCREEN_NAME.LOGIN}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.TASK}
          component={TaskScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAME.FIELD}
          component={FieldScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
