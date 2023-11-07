import React from 'react';
import {ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import {IIconButtonX} from '../theme/type';

function IconButtonX({
  containerStyle,
  iconStyle,
  icon,
  disabled,
  isLoading,
  onPress,
}: IIconButtonX) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="w-8 h-8 justify-center items-center bg-white-light dark:bg-dark-light from-zinc-800 to-zinc-800 rounded-[10px] border border-zinc-800 border-opacity-50"
      style={containerStyle}
      disabled={disabled}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" className="bg-secondary" />
      ) : (
        <Image
          source={icon}
          resizeMode="contain"
          className="w-3.5 h-3.5 fill-dark-light dark:fill-dark"
          style={iconStyle}
        />
      )}
    </TouchableOpacity>
  );
}

export default IconButtonX;
