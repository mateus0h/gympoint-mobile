import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';
import Background from '~/components/Background';

import { questionHelpOrder } from '~/store/modules/helpOrder/actions';

import { Container, Form, TextInput, ContainerButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit() {
    const idStudent = profile.id;

    dispatch(questionHelpOrder(question, idStudent));

    navigation.navigate('HelpOrder');
  }

  return (
    <Background>
      <Container>
        <Form>
          <TextInput
            style={{ textAlignVertical: 'top' }}
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
