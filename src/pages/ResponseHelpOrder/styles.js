import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const CardResponse = styled.TouchableOpacity`
  background: #fff;
  border: 1px solid #dddddd;
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
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;

export const DataResponse = styled.Text`
  font-size: 13px;
  color: #666666;
  margin: 0 5px 0 5px;
`;

export const TextResponse = styled.Text`
  margin: 15px 0 15px 0;

  color: #666666;
  font-size: 14px;
  line-height: 26px;
`;
