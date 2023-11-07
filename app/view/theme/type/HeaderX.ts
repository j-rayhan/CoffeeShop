import {TextStyle, ViewStyle} from 'react-native';

export interface IHeaderX {
  containerStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  leftComponent: React.ReactNode;
  rightComponent?: React.ReactNode,
}
