import styled from 'styled-components/native';

import logo from '~/assets/logoHeader.png';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 116px;
  height: 18px;
  margin: 0 auto;
`;
