import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {HeaderX, IconButtonX} from '../components';
import {avatar, searchNormal, drawer} from '../theme/icons';

const CATEGORY = ['All', 'Cappuccino', 'Espresso', 'Americano', 'Macchiato'];

const Home = () => {
  const [selectCategory, setSelectCategory] = React.useState(CATEGORY[0]);
  const renderHeader = () => (
    <HeaderX
      title=""
      leftComponent={<IconButtonX icon={drawer} onPress={() => null} />}
      rightComponent={
        <Image source={avatar} className="w-8 h-8 rounded-[10px]" />
      }
    />
  );
  const renderTitle = () => (
    <View className="mt-5 mb-4">
      <Text className="text-dark dark:text-white text-[28px] font-semibold font-poppins leading-9">
        {'Find the best \ncoffee for you'}
      </Text>
    </View>
  );
  const renderSearch = () => (
    <View className="flex-row h-[45px] bg-white-light  dark:bg-[#141921] rounded-[15px] items-center">
      <Image
        source={searchNormal}
        className="w-5 h-5 ml-4"
        resizeMode="contain"
      />
      <Text className="ml-4 text-zinc-600 text-[10px] font-medium font-poppins leading-tight">
        Find Your Coffee...
      </Text>
    </View>
  );
  const renderCategory = () => (
    <FlatList
      data={CATEGORY}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View className="mr-6 my-6 items-center">
          <Text className="text-primary text-sm font-semibold font-['Poppins'] mb-1 leading-tight">
            {item}
          </Text>
          {selectCategory ? (
            <View className="w-2 h-2 bg-primary rounded-[7px]" />
          ) : null}
        </View>
      )}
    />
  );
  return (
    <View className="flex-1 px-5 bg-white dark:bg-dark">
      {renderHeader()}
      {renderTitle()}
      {renderSearch()}
      {renderCategory()}
    </View>
  );
};

export default Home;
