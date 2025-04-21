import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {ButtonIcon} from '@atoms';
import {ChevronDown} from '@assets';

describe('ButtonIcon', () => {
  it('handles press correctly', () => {
    const onPress = jest.fn();
    const icon = () => <ChevronDown color="#000000" />;
    render(
      <ButtonIcon
        buttonLabel="Test ButtonIcon"
        onPress={onPress}
        icon={icon}
        iconPosition={'Left'}
      />,
    );

    fireEvent.press(screen.getByText('Test ButtonIcon'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', () => {
    const onPress = jest.fn();
    const icon = () => <ChevronDown color="#000000" />;
    render(
      <ButtonIcon
        buttonLabel="Test ButtonIcon"
        onPress={onPress}
        disabled
        icon={icon}
        iconPosition={'Left'}
      />,
    );

    fireEvent.press(screen.getByText('Test ButtonIcon'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
