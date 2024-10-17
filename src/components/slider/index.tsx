import { View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import SliderItem from './SliderItem'
import { IAlbum } from '@/app/data/music'

type Props = {
  itemList: IAlbum[]
}
const SlideImage = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0)

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x
    },
  })

  return (
    <View className="">
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => <SliderItem item={item} index={index} scrollX={scrollX} />}
        horizontal
        keyExtractor={(item, index) => item.id + index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

export default SlideImage
