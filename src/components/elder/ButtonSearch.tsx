import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SearchNormal } from 'iconsax-react-native'

export default function ButtonSearch() {
  return (
    <TouchableOpacity>
      <View className="flex-row  space-x-2 items-center bg-white rounded-full px-3.5 py-3">
        <SearchNormal size={24} color="#6B7280" />
        <Text className="text-base text-gray-500">Bạn muốn xem gì?</Text>
      </View>
    </TouchableOpacity>
  )
}
