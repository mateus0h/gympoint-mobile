import React from 'react';
import Button from '~/components/Button';

import { Container, Form, TextInput, ContainerButton } from './styles';

export default function NewHelpOrder() {
  function askQuestion() {}

  return (
    <Container>
      <Form>
        <TextInput
          multiline
          numberOfLines={4}
          // onChangeText={text => this.setState({ text })}
          // value={this.state.text}
        />
      </Form>

      <ContainerButton>
        <Button onPress={askQuestion}>Novo check-in</Button>
      </ContainerButton>
    </Container>
  );
}
