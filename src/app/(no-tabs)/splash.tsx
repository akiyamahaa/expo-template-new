import { Image, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()

  const onStart = () => {
    router.push('/(tabs)/video')
  }

  return (
    <SafeAreaView
      className="bg-white flex-1 justify-center"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="px-8 py-4 space-y-12">
        <Image source={images.thumbnail} className="w-full" />
        <CustomButton title="Bắt đầu" onPress={onStart} />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen
