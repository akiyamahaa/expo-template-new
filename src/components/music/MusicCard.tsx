import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { Play } from 'iconsax-react-native'
import { useRouter } from 'expo-router'

type Props = {}

const MusicCard = (props: Props) => {
  const router = useRouter()
  const handleMusicDetail = () => {
    router.push({ pathname: '/music-detail' })
  }
  return (
    <TouchableOpacity onPress={handleMusicDetail}>
      <View className="flex-row items-center space-x-4 ">
        <Image source={images.aoemchuamacmotlan} className="w-20 h-20 rounded-xl" />
        <View className="flex-1">
          <Text className="text-xl text-gray-800" ellipsizeMode="tail" numberOfLines={2}>
            Áo em chưa mặc một lần
          </Text>
          <Text className="text-base text-gray-500">Đan Nguyễn</Text>
        </View>
        <View className="p-2 rounded-full bg-gray-100">
          <Play size={14} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MusicCard
