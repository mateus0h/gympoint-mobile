import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';
import Background from '~/components/Background';

import { questionHelpOrder } from '~/store/modules/helpOrder/actions';

import { Container, Form, TextInput, ContainerButton } from './styles';

const schema = Yup.object().shape({
  question: Yup.string().required('Preencha o campo de pegunta!'),
});

export default function NewHelpOrder() {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit() {
    schema
      .isValid({
        question,
      })
      .then(function(valid) {
        if (valid) {
          const idStudent = profile.id;

          dispatch(questionHelpOrder(question, idStudent));
          setQuestion('');
        } else {
          Alert.alert('Aviso', 'Preencha o campo de pergunta!');
        }
      });
  }

  return (
    <Background>
      <Container>
        <Form>
          <TextInput
            multiline
            numberOfLines={15}
            returnKeyType="send"
            placeholder="Inclua seu pedido de auxílio"
            value={question}
            onChangeText={setQuestion}
            onSubmitEditing={handleSubmit}
          />
        </Form>

        <ContainerButton>
          <Button onPress={handleSubmit}>Enviar pedido</Button>
        </ContainerButton>
      </Container>
    </Background>
  );
}

NewHelpOrder.navigationOptions = ({ navigation }) => ({
  headerLeftContainerStyle: {
    marginLeft: 10,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={25} color="#000" />
    </TouchableOpacity>
  ),
});
