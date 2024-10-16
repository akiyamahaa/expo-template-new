import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { ArrowLeft } from 'iconsax-react-native'
import { useRouter } from 'expo-router'

export default function ButtonBack({ isBlur }: { isBlur: boolean }) {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.back()}>
      {isBlur ? (
        <View className="rounded-full overflow-hidden">
          <BlurView
            className="p-3 rounded-full"
            style={{ backgroundColor: '#F3F4F61F' }}
            intensity={12}
          >
            <ArrowLeft size={24} color="#fff" />
          </BlurView>
        </View>
      ) : (
        <View className="rounded-full bg-white overflow-hidden p-3">
          <ArrowLeft size={24} color="#000" />
        </View>
      )}
    </TouchableOpacity>
  )
}
