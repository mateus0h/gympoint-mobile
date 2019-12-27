import React from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import {
  CardResponse,
  Title,
  DataResponse,
  TextResponse,
  TextHeaderResponse,
  TextTitle,
  Container,
} from './styles';

export default function ResponseHelpOrder({ navigation }) {
  const question = navigation.getParam('question');

  return (
    <Background>
      <Container>
        <CardResponse>
          <TextHeaderResponse>
            <Title>
              <TextTitle>Pergunta</TextTitle>
            </Title>
            <DataResponse>{question.dataAskFormatted}</DataResponse>
          </TextHeaderResponse>

          <TextResponse>{question.question}</TextResponse>

          <TextHeaderResponse>
            <Title>
              <TextTitle>Resposta</TextTitle>
            </Title>
          </TextHeaderResponse>
          <TextResponse>
            {question.answer ? question.answer : 'Aguardando...'}
          </TextResponse>
        </CardResponse>
      </Container>
    </Background>
  );
}

ResponseHelpOrder.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]),
};

ResponseHelpOrder.defaultProps = {
  navigation: {},
};
