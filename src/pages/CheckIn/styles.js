import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerButton = styled.View`
  padding: 20px 20px 0 20px;
`;

export const CheckinBar = styled.View`
  background: #fff;
  height: 46px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #444444;
  font-weight: bold;
`;

export const DateCheckIn = styled.Text`
  color: #666666;
`;

export const TextBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 13px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
