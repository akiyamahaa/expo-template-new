import { AntDesign } from '@expo/vector-icons'
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import TrackPlayer, { useActiveTrack } from 'react-native-track-player'
import { router } from 'expo-router'
import HeaderComponent from '@/components/HeaderComponent'
import React from 'react'
import { PlayerProgressBar } from '@/components/elder/PlayerProgressbar'
import { PlayerControls } from '@/components/elder/PlayerControls'
import { defaultStyles } from '../styles'
import { screenPadding } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { ArrowLeft } from 'iconsax-react-native'

const MusicDetail = () => {
  const activeTrack = useActiveTrack()
  if (!activeTrack) {
    return <View />
  }

  return (
    <ImageBackground
      source={{
        uri: activeTrack?.thumbnail,
      }}
      resizeMode="cover"
      className="flex-1"
    >
      <StatusBar barStyle={'light-content'} />
      <View className="flex-1 opacity-95" style={{ backgroundColor: '#000000BF' }}>
        <View style={styles.overlayContainer}>
          <HeaderComponent
            title={activeTrack?.name}
            iconLeft={
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.stop()
                  router.back()
                }}
              >
                <View className="rounded-full overflow-hidden">
                  <BlurView
                    className="p-3 rounded-full"
                    style={{ backgroundColor: '#F3F4F61F' }}
                    intensity={12}
                  >
                    <ArrowLeft size={24} color="#fff" />
                  </BlurView>
                </View>
              </TouchableOpacity>
            }
            styleHeader="mt-12"
            styleTitle="text-white"
          />
          <View style={{ flex: 1, marginTop: 70 }}>
            <View style={styles.artworkImageContainer}>
              <Image
                source={{
                  uri: activeTrack?.thumbnail,
                }}
                resizeMode="cover"
                style={styles.artworkImage}
              />
            </View>
            <View className="text-center flex flex-row mt-3 justify-center">
              {/* Track artist */}
              {activeTrack?.author && (
                <Text numberOfLines={1} className="text-white text-xs">
                  {activeTrack.author}
                </Text>
              )}
            </View>
            {activeTrack?.name && (
              <Text numberOfLines={2} className="text-white mt-2 font-semibold text-center text-xl">
                {activeTrack.name}
              </Text>
            )}
            <View style={{ flex: 1 }}>
              <View>
                <PlayerProgressBar style={{ marginTop: 32 }} />
                <PlayerControls style={{ marginTop: 40 }} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  overlayContainer: {
    ...defaultStyles.container,
    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '45%',
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 22,
    fontWeight: '700',
  },
})

export default MusicDetail
