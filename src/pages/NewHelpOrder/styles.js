import styled from 'styled-components/native';

export const Container = styled.View``;
export const Form = styled.View``;

export const TextInput = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin: 30px 20px 30px 20px;
  background: #fff;
  padding: 15px;
`;

export const ContainerButton = styled.View`
  padding: 0 20px 0 20px;
`;
