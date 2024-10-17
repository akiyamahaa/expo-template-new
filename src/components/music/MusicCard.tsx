import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { Play } from 'iconsax-react-native'
import { useRouter } from 'expo-router'
import { useQueue } from '@/app/store/queue'
import TrackPlayer from 'react-native-track-player'
import { IMusic } from '@/types/common'

type Props = {
  music: IMusic
  listMusic: IMusic[]
}

const MusicCard = ({ music, listMusic }: Props) => {
  const router = useRouter()

  const queueOffset = useRef(0)

  const { activeQueueId, setActiveQueueId } = useQueue()

  const onPlayAndMusicScreen = async () => {
    if (!music) return // Ensure `book` is not null
    const trackIndex = listMusic.findIndex((track) => track.id === music.id)

    console.log(trackIndex, '---vtrackIndex')
    if (trackIndex === -1) return

    const isChangingQueue = music.id !== activeQueueId

    if (isChangingQueue) {
      const beforeTracks = listMusic.slice(0, trackIndex)
      const afterTracks = listMusic.slice(trackIndex + 1)

      await TrackPlayer.reset()

      // we construct the new queue
      await TrackPlayer.add(music)
      await TrackPlayer.add(afterTracks)
      await TrackPlayer.add(beforeTracks)

      await TrackPlayer.play()

      queueOffset.current = trackIndex
      setActiveQueueId(music.id)
    } else {
      const nextTrackIndex =
        trackIndex - queueOffset.current < 0
          ? listMusic.length + trackIndex - queueOffset.current
          : trackIndex - queueOffset.current

      await TrackPlayer.skip(nextTrackIndex)
      TrackPlayer.play()
    }
    router.push({ pathname: '/music-detail' })
  }

  return (
    <TouchableOpacity onPress={onPlayAndMusicScreen}>
      <View className="flex-row items-center space-x-4 ">
        <Image source={{ uri: music.thumbnail }} className="w-20 h-20 rounded-xl" />
        <View className="flex-1">
          <Text className="text-xl text-gray-800" ellipsizeMode="tail" numberOfLines={2}>
            {music.name}
          </Text>
          <Text className="text-base text-gray-500">{music.author}</Text>
        </View>
        <View className="p-2 rounded-full bg-gray-100">
          <Play size={14} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MusicCard
