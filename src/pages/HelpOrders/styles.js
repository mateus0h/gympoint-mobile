import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const ContainerButton = styled.View`
  padding: 20px 20px 0px 20px;
`;

export const CardResponse = styled.TouchableOpacity`
  background: #fff;
  border: 1px solid #dddddd;
  margin-bottom: 15px;
  padding: 15px;
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
  font-weight: bold;
  color: ${props => (props.answered ? '#42cb59' : '#999999')};
`;

export const DataResponse = styled.Text`
  font-size: 13px;
  color: #666666;
  margin: 0 5px 0 5px;
`;

export const TextResponse = styled.Text.attrs({
  numberOfLines: 3,
})`
  line-height: 26px;
  margin-top: 15px;
  color: #666666;
  font-size: 14px;
`;
