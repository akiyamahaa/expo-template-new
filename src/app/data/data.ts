import { ETypeData, IData } from '@/types/common'

export const technologyData: IData[] = [
  {
    id: 1,
    image:
      'https://s3-alpha-sig.figma.com/img/bdc7/963c/4417d26cacefdd147c3734b37f72a338?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QHELaF6QMr3GlUEDem76dvnQIWkwpNlQr-aC8qD9BzYSC69BXSNpcdAjSc48LhWkgfWcM--e0X2a7IdD4xykItg2-G27d0zNYjPruGqbFJc6P7hwS44BYspqGXnPTHDRsi0AaW4FYN9XSCDiEMr5YSOvYkGoWZXOV0aC4iixWLUO7mPqNctuMQAJMtters-uFo5jKbdTTwgO68L5rVm8Vrt5O0fr1otz2SY75mQDkrcKQ2U8sLzORgxmYY8dgob6~tQlKe4WpWlrPraLVClKFi5Tmn1hhZstYnKEmEGDroGEqbsPJTWfEzYBLrK9p4ZB-FjAeG82m6FZu1AAs169Zw__',
    type: ETypeData.TECHNOLOGY,
    title: 'Sử dụng internet an toàn',
    description:
      'Internet mang lại nhiều tiện ích nhưng cũng tiềm ẩn nhiều nguy cơ đối với người lớn tuổi. Bài viết này hướng dẫn cách sử dụng internet an toàn cho người lớn tuổi để tránh các rủi ro như lừa đảo, virus và bảo mật thông tin cá nhân.',
    body: [
      {
        title: 'Không Chia Sẻ Thông Tin Cá Nhân Công Khai',
        content:
          'Người lớn tuổi cần tránh chia sẻ các thông tin cá nhân nhạy cảm như số tài khoản, chứng minh nhân dân trên mạng xã hội hoặc qua email không rõ nguồn gốc để tránh bị lừa đảo và mất mát tài sản.',
      },
      {
        title: 'Sử Dụng Mật Khẩu Mạnh',
        content:
          'Tạo mật khẩu phức tạp, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt. Nên thay đổi mật khẩu định kỳ và sử dụng mật khẩu khác nhau cho mỗi tài khoản.',
      },
      {
        title: 'Cẩn Thận Khi Mở Email Và Tin Nhắn Lạ',
        content:
          'Không mở email hoặc tin nhắn từ người lạ chứa liên kết hoặc yêu cầu cung cấp thông tin cá nhân. Email lừa đảo có thể chứa mã độc gây mất tài khoản hoặc thông tin nhạy cảm.',
      },
      {
        title: 'Sử Dụng Phần Mềm Diệt Virus',
        content:
          'Cài đặt và cập nhật phần mềm diệt virus thường xuyên giúp bảo vệ thiết bị của bạn khỏi virus và các cuộc tấn công mạng.',
      },
      {
        title: 'Cẩn Trọng Khi Mua Sắm Trực Tuyến',
        content:
          'Chỉ mua sắm tại các trang web uy tín và không cung cấp thông tin thẻ tín dụng trên các trang web không có chứng chỉ bảo mật.',
      },
    ],
  },
]

export const totalData = [...technologyData]
