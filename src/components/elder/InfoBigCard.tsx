import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { IData } from '@/types/common'

type Props = {
  data: IData
}

const InfoBigCard = ({ data }: Props) => {
  const router = useRouter()
  const navigateDetail = () => {
    router.push({
      pathname: '/detail',
      params: {
        id: data.id,
        type: data.type,
      },
    })
  }
  return (
    <TouchableOpacity onPress={navigateDetail}>
      <View className="bg-white rounded-3xl overflow-hidden">
        <Image source={{ uri: data.image }} className="w-full h-40" />
        <View className="py-3 px-4">
          <Text className="text-lg font-medium text-gray-800">{data.title}</Text>
          <Text
            className="text-base text-gray-500 leading-6"
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {data.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default InfoBigCard
