import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { Container, Input, SubmitButton, Form } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [idStudent, setIdStudent] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(idStudent));
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input
          keybordType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="next"
          value={idStudent}
          onChangeText={setIdStudent}
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Acessar
        </SubmitButton>
      </Form>
    </Container>
  );
}
