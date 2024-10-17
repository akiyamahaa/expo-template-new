import { ImageSourcePropType } from 'react-native'
import { Track } from 'react-native-track-player'

export interface IData {
  id: number
  image: any
  type: ETypeData
  youtubeId?: string
  description: string
  title: string
  body: Array<{
    title: string
    image?: ImageSourcePropType
    content: string
  }>
}

export enum ETypeData {
  TECHNOLOGY,
  EXERCISE,
  LIBRARY,
}

export enum EMusicType {
  BOLERO = 'bolero',
  THIEN = 'thien',
}
export enum EAuthorName {
  BANGKIEU = 'Bằng Kiều',
  QUANGLE = 'Quang Lê',
  HOANGTHUCLINH = 'Hoàng Thục Linh',
}

export interface IMusic extends Track {
  id: number
  name: string
  author: string
  thumbnail: string
}

export interface IAlbum {
  id: number
  title: string
  thumbnail: string
  list: IMusic[]
  musicType: EMusicType
}

export interface IAuthor {
  id: number
  name: EAuthorName
  thumbnail: string
}
