import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useRouter } from 'expo-router'
import { IData } from '@/types/common'
import { BlurView } from 'expo-blur'
import { Headphone } from 'iconsax-react-native'

type SliderItemProps = {
  item: IData
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
          pathname: '/detail',
          // params: {
          //   id: item.id,
          // },
        })
      }
    >
      <Animated.View
        className="justify-center items-center"
        style={[{ width: width }, rnAnimatedStyle]}
      >
        <View className="h-[200px] rounded-3xl overflow-hidden" style={{ width: imageWidth }}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{ width: imageWidth }}
            className="h-[200px] justify-end items-end"
          >
            <View className="p-4">
              <View className="rounded-full overflow-hidden">
                <BlurView intensity={50} className="flex-row gap-1 px-6 py-2">
                  <Headphone size={16} color="#fff" />
                  <Text className="text-sm text-white">12952</Text>
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
