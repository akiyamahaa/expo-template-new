import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IAuthor } from '@/types/common'
import { useRouter } from 'expo-router'

type Props = {
  author: IAuthor
}

const SingerCard = ({ author }: Props) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: '/music-author',
          params: {
            authorName: author.name,
          },
        })
      }}
    >
      <View className="w-32 space-y-2">
        <Image source={{ uri: author.thumbnail }} className="w-32 h-32 rounded-full" />
        <Text className="text-sm text-gray-800 text-center" ellipsizeMode="tail" numberOfLines={2}>
          {author.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default SingerCard
