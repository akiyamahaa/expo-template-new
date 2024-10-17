import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/elder/Header'
// import ButtonSearch from '@/components/elder/ButtonSearch'
import InfoCard from '@/components/elder/InfoCard'
import { newsData } from '../data/data'

const news = () => {
  return (
    <View className="flex-1 bg-gray-200 pb-8">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenWrapper>
          <View className="space-y-4 px-5 mb-4">
            <Header />
            <View className="space-y-4">
              <Text className="text-3xl text-gray-800 leading-9 mb-4">
                Thư viện tài liệu thú vị và bổ ích cho người già
              </Text>
              {/* <ButtonSearch /> */}
            </View>
          </View>
        </ScreenWrapper>
        <View className="mt-10 px-5">
          <View>
            <Text className="text-2xl text-gray-800 font-medium">Thư viện văn thơ</Text>
          </View>
          <View className="mt-6 flex-row flex-wrap justify-between">
            {newsData.map((item) => (
              <View className="w-[48%] mb-6" key={item.id}>
                <InfoCard data={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default news
