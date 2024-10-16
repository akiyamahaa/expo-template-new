import { Image, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'

type Props = {}

const InfoCard = (props: Props) => {
  return (
    <View className="space-y-2">
      <Image source={images.hittho} className="w-full h-44 rounded-[20px]" />
      <Text className="text-lg font-medium text-gray-800" ellipsizeMode="tail" numberOfLines={1}>
        Bài tập hít thở
      </Text>
    </View>
  )
}

export default InfoCard
