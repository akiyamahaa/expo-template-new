import { View } from 'react-native'
import React from 'react'
import ButtonBack from './ButtonBack'

export default function Header() {
  return (
    <View className="flex-row">
      <ButtonBack isBlur={false} />
    </View>
  )
}
