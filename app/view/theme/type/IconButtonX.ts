import {ImageSourcePropType, ImageStyle, ViewStyle} from 'react-native';

export interface IIconButtonX {
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
  disabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
  icon: ImageSourcePropType;
}
