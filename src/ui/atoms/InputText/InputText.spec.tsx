import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {InputText} from '@atoms';

let receivedValue = {
  text: '',
};

describe('InputText', () => {
  it('should be able received value', async () => {
    const expectedValue = 'ASD!@#';
    const placeholderText = 'This is input';

    render(
      <InputText
        placeholder={placeholderText}
        value={receivedValue.text}
        onChangeText={(value: string) => {
          receivedValue.text = value;
        }}
      />,
    );
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.changeText(input, expectedValue);
    expect(receivedValue.text).toEqual(expectedValue);
  });
});
