import React from 'react';
import {Text, View} from 'react-native';
import {IHeaderX} from '../theme/type';

function HeaderX({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
}: IHeaderX) {
  return (
    <View className="flex-row items-center mt-6 my-5" style={containerStyle}>
      {/* Left */}
      {leftComponent}
      {/* title */}
      <View className="flex-1">
        <Text
          className="text-white text-xl font-semibold font-poppins leading-9"
          style={titleStyle}>
          {title}
        </Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
}

export default HeaderX;
