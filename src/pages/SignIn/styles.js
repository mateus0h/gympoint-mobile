import Platform from 'react-native';

import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background: #f5f5f5;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Input = styled.TextInput`
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;

  border: 1px solid #ddd;

  flex-direction: row;
  align-items: center;

  font-size: 15px;
  color: #000;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;
