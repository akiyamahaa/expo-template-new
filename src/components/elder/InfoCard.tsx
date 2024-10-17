import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IData } from '@/types/common'
import { useRouter } from 'expo-router'

type Props = {
  data: IData
}

const InfoCard = ({ data }: Props) => {
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
      <View className="space-y-2">
        <Image source={{ uri: data.image }} className="w-full h-44 rounded-[20px]" />
        <Text className="text-lg font-medium text-gray-800" ellipsizeMode="tail" numberOfLines={1}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default InfoCard
