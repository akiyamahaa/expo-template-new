import { EAuthorName, EMusicType, IAlbum, IAuthor, IMusic } from '@/types/common'

export const listMusics: IMusic[] = [
  {
    id: 1,
    url: 'https://audio.jukehost.co.uk/nXa6f08Ojlz1V2SYJ3axYmSa7ot0hblZ',
    name: 'Hotlanta',
    author: EAuthorName.BANGKIEU,
    thumbnail: 'https://i.ytimg.com/vi/fwuW0HpXA30/maxresdefault.jpg',
  },
  {
    id: 2,
    url: 'https://audio.jukehost.co.uk/cbMVQp4JGHhSNEeCqRjvieiigYpUaE0s',
    name: 'Take Me Back',
    author: EAuthorName.BANGKIEU,
    thumbnail: 'https://i1.sndcdn.com/artworks-yaXBlJOtjWvRcNnA-W6spcw-t500x500.jpg',
  },
  {
    id: 3,
    url: 'https://audio.jukehost.co.uk/Ge9fdTsk6Y9SWoOnC7QJH0n8pprU7rev',
    name: 'mellow-future-bass-bounce-on-it',
    author: EAuthorName.BANGKIEU,
    thumbnail: 'https://i1.sndcdn.com/artworks-yaXBlJOtjWvRcNnA-W6spcw-t500x500.jpg',
  },
  {
    id: 4,
    url: 'https://audio.jukehost.co.uk/KDOr4agGwHHvikLtk9zukiiDpYNzIp8w',
    name: 'Outside the Box',
    author: EAuthorName.QUANGLE,
    thumbnail: 'https://i.ytimg.com/vi/nAXO_-eGmGY/maxresdefault.jpg',
  },
  {
    id: 5,
    author: EAuthorName.QUANGLE,
    url: 'https://audio.jukehost.co.uk/K4PdyskIIfRrRotZtwF0EfHkJGjTs9Dy',
    name: "Smokey's Lounge",
    thumbnail: 'https://i.scdn.co/image/ab67616d0000b2730efb49aab6109fe4c74d6b04',
  },
  {
    id: 6,
    author: EAuthorName.QUANGLE,
    url: 'https://audio.jukehost.co.uk/5MLu9yZCOGOCpf9yhdK4uitEv2CZ9fwx',
    name: 'Sunny Days',
    thumbnail: 'https://i1.sndcdn.com/artworks-fJ47RvWYE7weOhay-V5Qjyw-t500x500.jpg',
  },
  {
    id: 7,
    author: EAuthorName.HOANGTHUCLINH,
    url: 'https://audio.jukehost.co.uk/bnvYr6BoqfoZjrx72rvq3hGXyE6b7Qyz',
    name: 'Hidden Frozen Lake - Go By Ocean',
    thumbnail: 'https://f4.bcbits.com/img/a3736661212_65',
  },
]

export const listAuthor: IAuthor[] = [
  {
    id: 1,
    name: EAuthorName.BANGKIEU,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/64c1/c77e/e1bf7b827330fe50ba87bb5be6925ea9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NwaI~qT5frSKKcBlpnSH9W-STIHw57d8JnFlJHlfW1nrJihU7JHByQvlU-B9Hjf6TI~q1ypnIUo1gfH~A1Bmo9q-SQ-jxhArW9om-x7gccdZzxzLJ6jTsYSrt2xHeXyd4FkdTkRmQ81OC~bwdV1TkB6DbN7msdliz9ULdSC~8kKgmhchQ1bu9ivQJ4HkJ5ehsN6~HInt73pl1o4QfTFz2AZnxmu3fdPpiR1PWjAIww4fwByjzBW7nKLafgnnIchESh7D3Jks7zEnNliGGXd7qE0oy~F~XYTeuh4~W7rZzf0sKFdrGodtLCfT4Y7f88Y05oQqta-xIKt8rVZKON5hoA__',
  },
  {
    id: 2,
    name: EAuthorName.QUANGLE,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/756d/c8c6/ae773fe9304319dfa3aba8dde4448be1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjb9~R1LjaN0F2VGOl~9bn2zeIkH8qD3kXgHyKbhPE9n095NHiSpvE4X8PR1N-TggZZ~mBYS6AT-c1aqSQNGG2dxu5EcEXEQnxgzaaaHNMo~OMTgxxNtpgq7BXxCVqyow49pNgtVORpO-lqMWxAcPHDRReiP7N4YdOkefOh9fSE856UmHiEslJSideT0Yo~mSjs6h-Y2Co6pQcixQrB~yFYLSatbm~OCjydP2m0vdCaPY3xkJZu1kpDtLUF4CNN35BDl--j6ESCeHHjZaOTa56ttpfnVuwe6073c-fq7cPfZXchrc2IQ-Y7QKcj2ls5c~6vgBE7kL8qzp7stIx02Uw__',
  },
  {
    id: 3,
    name: EAuthorName.HOANGTHUCLINH,
    thumbnail:
      'https://nguoinoitieng.vn/wp-content/uploads/2019/08/28115156733_48c0ca9175_b-768x1024.jpg',
  },
]

export const listMeditationMusic = [
  {
    id: 1,
    url: 'https://firebasestorage.googleapis.com/v0/b/practice-firebase-projec-e3f5a.appspot.com/o/NhacThienTinhTamAnNhienTuTai-HoaTau-4588155.mp3?alt=media&token=1cd1e78e-4538-4562-a7ca-e0160dbea0aa',
    name: 'Nhạc Thiền - Tĩnh Tâm - An Nhiên Tự Tại',
    author: 'Unknown',
    thumbnail:
      'https://cdn.tgdd.vn/Files/2020/12/18/1314609/tong-hop-nhung-bai-nhac-thien-tinh-giup-ban-thu-gian-dau-oc-giam-cang-thang-202012181219594779.jpg',
  },
  {
    id: 2,
    url: 'https://firebasestorage.googleapis.com/v0/b/practice-firebase-projec-e3f5a.appspot.com/o/nhacthien2.mp3?alt=media&token=59b8256d-30fa-419e-a6b6-c5014e2e5ad1',
    name: 'Nhạc Thiền',
    author: 'Unknown',
    thumbnail: 'https://i1.sndcdn.com/artworks-000664726879-zchsc0-t500x500.jpg',
  },
  {
    id: 3,
    url: 'https://firebasestorage.googleapis.com/v0/b/practice-firebase-projec-e3f5a.appspot.com/o/01%20Track%201.mp3?alt=media&token=fe77f2b8-407a-4baf-865b-95bdda3ea21a',
    name: 'Nhạc thư giãn',
    author: 'Unknown',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzG1KWlz49GMeR7udXRIaCdWN1oG-VdkZ2Q&s',
  },
]

export const listAlbums: IAlbum[] = [
  {
    id: 1,
    title: '100 Ca Khúc Nhạc Trữ Tình Hay Nhất',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/0192/cd3b/de8c618f7919052fce3b5a1948a98fb6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LywgnKdp8XS9ptyAJ2j6j7Jop~6Eya~jnXayXRwqsKlAjSx9k08ZnAlIxCcXi-dqzcspWPoqpHsMmQuj7s5RHKVawW6sIUWHFIAY0tHQDklBEbxSQvT6H-0E4vgDDhOSSwobDFRshfNViWStiXnMPMRL7u-O3y6e1NZwvW9E7P2Ku8pbiKbXEjCL1VTEqfxaZES60N99L11dddsq6xtEk-rZ6sJS5cGRJNnKMFru7Gpo0lj7urvuV6clsL~DPcDahHTyGlf5sxp-6MQBs8JjYWpHg6xrODbCdBCqjTD5fys3ui5IrfsgOZ~hbI4yfOB2pFaR5p~qVCfgeAgfVVMXng__',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
  {
    id: 2,
    title: '340+ Tình Khúc Bolero Hải Ngoại',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/b259/50c7/0c02806d9c0fb30b69a8e4f2cd422010?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCYOx-hatU5kEZrX6liyxAgoJ~KYbJssLVzbhtzyjJjMr~UF6vfDxIuo0j~7XdG6x3-Vc9Ej96aiYbOjNyAEH5wHahKWqrjBvNMba1X2G6nfHJun3dwkdH1E1GPPXHTY7Il5ioKzTfZOoyUKhkueS7JKXXIzUh9-GU7Wx-obQ5q9ESrfdJ2VoTh4LGPpB2OeOKRHUJKLx0trZKzSHYu-8qPaejPHv~YezW~kgCUoMlZEjntHe2h4bdAvnc2apFRbM2wJSRKmh5wp4OdnJqr3o3KzzGnrMwF5TpR6740TsBlL71CS5Bp9e5Pvl7hLsIB3ZKTyCa4wMHnRS7X2y20nSQ__',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
  {
    id: 3,
    title: 'Nhạc Thiền Không Lời Hay Nhất',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/3a5f/c285/12a394eafcad25a9f0827c1b5008ceaa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEdvyD-Y-HzosGiVtpu17WC-6ggl5mB71IpBjK2C9TbY2c8vkxm7CZgp1Vof0IRTavCRbk5aJyvVVg2uNrMgkAf2h1YwpWsj-8MEngWwkG16rftOVR3hjRn6kJzN77YSwWtZ6h72PNjynSMGiicEd-BU3zVfBxh1N0ipMkY23t2tGrAI7X8wg63sipFHFgIc8cHi9aXRR7QspNCWC7LWPxpV0If1bJ9P73WNIBur20LhR-8L19m3z~v0N~4gT6ZyIibJp0LiFwvq-3ioqWSqUV3JjZRLDS30FOxeV8G-FiYtSeCMwR1gsnR4UqaDFOXlUY06RrZPums0ydUPTthsCg__',
    list: listMeditationMusic,
    musicType: EMusicType.THIEN,
  },
  {
    id: 4,
    title: '340+ Tình Khúc Bolero Hải Ngoại',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/b259/50c7/0c02806d9c0fb30b69a8e4f2cd422010?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCYOx-hatU5kEZrX6liyxAgoJ~KYbJssLVzbhtzyjJjMr~UF6vfDxIuo0j~7XdG6x3-Vc9Ej96aiYbOjNyAEH5wHahKWqrjBvNMba1X2G6nfHJun3dwkdH1E1GPPXHTY7Il5ioKzTfZOoyUKhkueS7JKXXIzUh9-GU7Wx-obQ5q9ESrfdJ2VoTh4LGPpB2OeOKRHUJKLx0trZKzSHYu-8qPaejPHv~YezW~kgCUoMlZEjntHe2h4bdAvnc2apFRbM2wJSRKmh5wp4OdnJqr3o3KzzGnrMwF5TpR6740TsBlL71CS5Bp9e5Pvl7hLsIB3ZKTyCa4wMHnRS7X2y20nSQ__',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
  {
    id: 5,
    title: '340+ Tình Khúc Bolero Hải Ngoại',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/b259/50c7/0c02806d9c0fb30b69a8e4f2cd422010?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCYOx-hatU5kEZrX6liyxAgoJ~KYbJssLVzbhtzyjJjMr~UF6vfDxIuo0j~7XdG6x3-Vc9Ej96aiYbOjNyAEH5wHahKWqrjBvNMba1X2G6nfHJun3dwkdH1E1GPPXHTY7Il5ioKzTfZOoyUKhkueS7JKXXIzUh9-GU7Wx-obQ5q9ESrfdJ2VoTh4LGPpB2OeOKRHUJKLx0trZKzSHYu-8qPaejPHv~YezW~kgCUoMlZEjntHe2h4bdAvnc2apFRbM2wJSRKmh5wp4OdnJqr3o3KzzGnrMwF5TpR6740TsBlL71CS5Bp9e5Pvl7hLsIB3ZKTyCa4wMHnRS7X2y20nSQ__',
    list: listMusics,
    musicType: EMusicType.BOLERO,
  },
]

export const allMusics = [...listMusics]
