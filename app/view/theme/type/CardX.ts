import {TextStyle, ViewStyle} from 'react-native';

export interface ICardX {
  containerStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  leftComponent: React.ReactNode;
  rightComponent?: React.ReactNode,
}

