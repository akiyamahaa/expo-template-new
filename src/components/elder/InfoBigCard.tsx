import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'

type Props = {}

const InfoBigCard = (props: Props) => {
  const router = useRouter()
  const navigateDetail = () => {
    router.push({ pathname: '/detail' })
  }
  return (
    <TouchableOpacity onPress={navigateDetail}>
      <View className="bg-white rounded-3xl overflow-hidden">
        <Image source={images.cachsudungcongnghe} className="w-full h-40" />
        <View className="py-3 px-4">
          <Text className="text-lg font-medium text-gray-800">Sử dụng internet an toàn</Text>
          <Text
            className="text-base text-gray-500 leading-6"
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            Lorem ipsum dolor sit amet consectetur. Quis nibh pharetra diam quam sed ut sed
            mauris...
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default InfoBigCard
