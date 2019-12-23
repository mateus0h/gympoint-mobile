import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const ContainerButton = styled.View`
  padding: 20px 20px 0px 20px;
`;

export const CardResponse = styled.View`
  height: 150px;
  background: #fff;
  border: 1px solid #dddddd;
  padding: 10px;
  margin-bottom: 15px;
`;

export const TextHeaderResponse = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.View`
  flex-direction: row;
`;

export const TextTitle = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: ${props => (props.answered ? '#42cb59' : '#999999')};
`;

export const DataResponse = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const TextResponse = styled.Text`
  margin-top: 15px;
  color: #666666;
  font-size: 14px;
`;
