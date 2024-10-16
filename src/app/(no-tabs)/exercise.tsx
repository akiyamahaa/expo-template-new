import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/elder/Header'
import InfoBigCard from '@/components/elder/InfoBigCard'
import InfoCard from '@/components/elder/InfoCard'

type Props = {}

const exercise = (props: Props) => {
  return (
    <View className="flex-1 bg-gray-200 pb-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenWrapper>
          <View className="space-y-4 px-5 mb-4">
            <Header />
            <View className="space-y-4">
              <Text className="text-3xl text-gray-800 leading-9">
                Người già sống khỏe, phòng ngừa bệnh tật
              </Text>
            </View>
          </View>
        </ScreenWrapper>
        <View className="mt-4 px-5">
          <InfoBigCard />
          <View className="mt-6 flex-row flex-wrap justify-between">
            <View className="w-[48%] mb-6">
              <InfoCard />
            </View>
            <View className="w-[48%] mb-6">
              <InfoCard />
            </View>
            <View className="w-[48%] mb-6">
              <InfoCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default exercise
