import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'

type Props = {}

const CollectionCard = (props: Props) => {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.push('/music-list')}>
      <View className="w-36 space-y-2">
        <Image source={images.bangkieu} className="w-36 h-36 rounded-[20px]" />
        <Text className="text-sm text-gray-800" ellipsizeMode="tail" numberOfLines={2}>
          Bằng kiều, Quang Lê, Hoàng Thục Linh...
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CollectionCard
