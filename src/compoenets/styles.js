import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import { SizeConfig } from '../size';

export const HeaderText = styled.Text`
  color: ${props => props.color};
  font-size: ${SizeConfig.fontSize * 4}px;
  ffont-family: Roboto-Medium;
  font-weight: ${props => `${props.weight}`};
`;
