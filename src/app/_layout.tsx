import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useCallback, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@/redux'
import TrackPlayer from 'react-native-track-player'
import service from '@/constants/playbackService'
import { useSetupTrackPlayer } from './hooks/useSetupTrackPlayer'
import { useLogTrackPlayerState } from './hooks/useLogTrackPlayerState'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('@/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins-Thin.ttf'),
  })

  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync()
  }, [])

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  })

  useLogTrackPlayerState()

  useEffect(() => {
    TrackPlayer.registerPlaybackService(() => service)
    console.log('go')
  }, [])

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded) return null

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default RootLayout
