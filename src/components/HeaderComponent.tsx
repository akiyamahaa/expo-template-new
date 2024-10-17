import { View, Text } from 'react-native'

interface IHeaderComponentProps {
  iconLeft?: any
  title: string
  iconRight?: any
  styleHeader?: string
  styleTitle?: string
}

export default function HeaderComponent({
  iconLeft,
  title,
  styleHeader,
  styleTitle,
}: IHeaderComponentProps) {
  return (
    <View className={`flex flex-row justify-between items-center mb-2 ${styleHeader}`}>
      {iconLeft ? <View>{iconLeft}</View> : <View className="w-6" />}
      <View className="px-2 w-2/3 text-center">
        <Text className={`text-xl font-bold text-primary-600 text-center ${styleTitle}`}>
          {title}
        </Text>
      </View>
      <View className="w-9 h-9" />
    </View>
  )
}
