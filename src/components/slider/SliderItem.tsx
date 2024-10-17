import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useRouter } from 'expo-router'
import { BlurView } from 'expo-blur'
import { Headphone } from 'iconsax-react-native'
import { IAlbum } from '@/app/data/music'
import { getRandomInt } from '@/utils/function'

type SliderItemProps = {
  item: IAlbum
  index: number
  scrollX: SharedValue<number>
}
const { width } = Dimensions.get('screen')
const imageWidth = width - 40
const SliderItem = ({ item, index, scrollX }: SliderItemProps) => {
  const router = useRouter()

  const rnAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-width * 0.2, 0, width * 0.2],
      Extrapolation.CLAMP,
    )
    const scale = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.82, 1, 0.82],
      Extrapolation.CLAMP,
    )
    return {
      transform: [
        {
          scale: scale,
        },
        {
          translateX: translateX,
        },
      ],
    }
  })
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/music-list',
          params: {
            id: item.id,
            musicType: item.musicType,
          },
        })
      }
    >
      <Animated.View
        className="justify-center items-center"
        style={[{ width: width }, rnAnimatedStyle]}
      >
        <View className="h-[200px] rounded-3xl overflow-hidden" style={{ width: imageWidth }}>
          <ImageBackground
            source={{ uri: item.thumbnail }}
            resizeMode="cover"
            style={{ width: imageWidth }}
            className="h-[200px] justify-end items-end"
          >
            <View className="p-4">
              <View className="rounded-full overflow-hidden">
                <BlurView intensity={50} className="flex-row gap-1 px-6 py-2">
                  <Headphone size={16} color="#fff" />
                  <Text className="text-sm text-white">{getRandomInt(3000, 15000)}</Text>
                </BlurView>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default SliderItem
