import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import CardSmall from '@/components/home/CardSmall'
import { Book, Headphone, SmartHome, Weight } from 'iconsax-react-native'
import { images } from '@/constants'
import CardBig from '@/components/home/CardBig'
import { useRouter } from 'expo-router'

const HomePage = () => {
  const router = useRouter()

  return (
    <View className="flex-1 bg-gray-200 pb-8">
      <ScrollView>
        <ScreenWrapper>
          <View className="px-5 space-y-4">
            <View>
              <Text className="font-semibold text-lg text-gray-800">Elder Sphere</Text>
              <Text className="text-báe text-gray-500">Xin chào</Text>
            </View>
            <View>
              <Text className="text-3xl text-gray-800 w-3/4">
                Khám phá thư viện hỗ trợ người cao tuổi
              </Text>
            </View>
            <View className="flex-row space-x-4">
              <View className="flex-1">
                <TouchableOpacity onPress={() => router.push('/technology')}>
                  <CardSmall
                    Icon={<SmartHome size={12} color="#1782FF" />}
                    title="Công nghệ"
                    description="Bài hướng dẫn"
                    quantity={100}
                    iconBGColor="bg-primary-100"
                    image={images.congnghe}
                  />
                </TouchableOpacity>
              </View>
              <View className="flex-1">
                <TouchableOpacity onPress={() => router.push('/music')}>
                  <CardSmall
                    Icon={<Headphone size={12} color="#22C55E" />}
                    title="Âm nhạc"
                    description="Bản nhạc"
                    quantity={120}
                    iconBGColor="bg-greenLight"
                    image={images.amnhac}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="space-y-4">
              <View>
                <TouchableOpacity onPress={() => router.push('/exercise')}>
                  <CardBig
                    title="Thể dục"
                    quantity={218}
                    image={images.theduc}
                    description="Bài tập thể dục"
                    Icon={<Weight variant="Bold" color="#fff" size={12} />}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => router.push('/news')}>
                  <CardBig
                    title="Tài liệu văn thơ, lịch sử"
                    quantity={218}
                    image={images.tintuc}
                    description="Bài viết"
                    Icon={<Book variant="Bold" color="#fff" size={12} />}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScreenWrapper>
      </ScrollView>
    </View>
  )
}

export default HomePage
