import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, Button } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={25} color="#ee4e61" />
      </Button>
      <Logo />
    </Container>
  );
}
