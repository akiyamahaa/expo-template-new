import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { ArrowRight } from 'iconsax-react-native'

type Props = {
  Icon: ReactNode
  title: string
  image: ImageSourcePropType
  quantity: number
  description: string
}

const CardBig = ({ Icon, description, image, quantity, title }: Props) => {
  return (
    <View className="rounded-3xl overflow-hidden">
      <ImageBackground source={image} className="w-full h-52">
        <View className="p-4 flex-col justify-between flex-1">
          <View className="flex-row items-center gap-1">
            <View className="rounded-full" style={{ backgroundColor: '#FFFFFF3D' }}>
              {Icon}
            </View>
            <Text className="text-lg text-white">{title}</Text>
          </View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-xl text-white">{quantity}</Text>
              <Text className="text-xs text-white">{description}</Text>
            </View>
            <View className="bg-white rounded-full p-3">
              <ArrowRight size={24} color="#1F2937" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default CardBig
