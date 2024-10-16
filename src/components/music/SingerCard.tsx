import { Image, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'

type Props = {}

const SingerCard = (props: Props) => {
  return (
    <View className="w-32 space-y-2">
      <Image source={images.bangkieu} className="w-32 h-32 rounded-full" />
      <Text className="text-sm text-gray-800 text-center" ellipsizeMode="tail" numberOfLines={2}>
        Bằng kiều
      </Text>
    </View>
  )
}

export default SingerCard
