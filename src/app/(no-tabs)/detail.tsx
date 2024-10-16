import { ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { images } from '@/constants'
import ButtonBack from '@/components/elder/ButtonBack'

const DetailPage = () => {
  return (
    <View className="flex-1 bg-gray-200">
      <View>
        <StatusBar barStyle={'light-content'} />
        <ImageBackground source={images.cachsudungcongnghe} className="h-52 w-full relative">
          <ScreenWrapper>
            <View className="flex-row px-5 relative z-10">
              <ButtonBack isBlur={true} />
            </View>
          </ScreenWrapper>
          {/* Blur Layout */}
          <View className="bg-gray-800 absolute top-0 left-0 right-0 bottom-0 opacity-40" />
        </ImageBackground>
      </View>
      <ScrollView className="flex-1 px-4 py-6 bg-background-300 -mt-4 rounded-t-3xl space-y-4">
        <View>
          <Text className="font-bold text-[20px] text-gray-800">Sử dụng internet an toàn</Text>
        </View>
        <View className="space-y-4">
          <Text className="text-base text-gray-500 leading-6">
            Lorem ipsum dolor sit amet consectetur. Ultrices curabitur lectus vitae amet aliquam.
            Vitae pharetra viverra augue mi. Varius eu massa nisl et ipsum. Elementum nunc
            ullamcorper id nisi egestas leo adipiscing nisl. Orci dui molestie ultrices nec est
            malesuada. Neque nunc aliquet tincidunt dolor eleifend tincidunt eget proin. Dignissim
            fusce libero viverra amet gravida id dolor tristique. Integer pharetra netus donec
            sollicitudin risus amet morbi. Rhoncus vitae et vitae tellus convallis aliquam
            tristique. Semper quam fames suspendisse est.
          </Text>
        </View>
        <View className="h-12" />
      </ScrollView>
    </View>
  )
}

export default DetailPage
