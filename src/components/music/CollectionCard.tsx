import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { IAlbum } from '@/app/data/music'

type Props = {
  album: IAlbum
}

const CollectionCard = ({ album }: Props) => {
  const router = useRouter()
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/music-list',
          params: {
            id: album.id,
            musicType: album.musicType,
          },
        })
      }
    >
      <View className="w-36 space-y-2">
        <Image source={{ uri: album.thumbnail }} className="w-36 h-36 rounded-[20px]" />
        <Text className="text-sm text-gray-800" ellipsizeMode="tail" numberOfLines={2}>
          {album.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CollectionCard
