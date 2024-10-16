import React, { ReactNode } from 'react'
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

type Props = {
  Icon: ReactNode
  title: string
  iconBGColor: string
  image: ImageSourcePropType
  quantity: number
  description: string
}

const CardSmall = ({ Icon, description, iconBGColor, image, quantity, title }: Props) => {
  return (
    <View className="bg-white rounded-3xl p-1.5 pt-4 space-y-1.5">
      <View className="flex flex-row items-center gap-1 justify-center">
        <View className={`p-1  rounded-full ${iconBGColor}`}>{Icon}</View>
        <Text className="text-lg text-gray-800">{title}</Text>
      </View>
      <View className="rounded-2xl overflow-hidden">
        <ImageBackground source={image} className="w-full h-40 flex-col justify-end">
          <View className="flex-row items-center justify-between p-2.5">
            <View>
              <Text className="text-base text-gray-800">{quantity}</Text>
              <Text className="text-xs text-gray-800">{description}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default CardSmall
