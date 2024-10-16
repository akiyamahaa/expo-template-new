import { ImageBackground, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()

  const onStart = () => {
    router.push('/home')
  }

  return (
    <ImageBackground source={images.onboard} className="flex-1 justify-end">
      <StatusBar barStyle={'light-content'} />
      <View className="space-y-8 px-5 pb-16">
        <View className="space-y-4">
          <Text className="text-primary-600 font-medium text-md">ELDER SPHERE</Text>
          <Text className="text-gray-800 text-4xl">
            Cải thiện cuộc sống giúp người cao tuổi tự tin, thoải mái, sống vui khỏe.
          </Text>
          <Text className="text-lg text-gray-800 font-light">
            Sức khỏe của bạn là khoản đầu tư, không phải khoản chi phí
          </Text>
        </View>
        <CustomButton title="Bắt đầu" onPress={onStart} />
      </View>
    </ImageBackground>
  )
}

export default SplashScreen
