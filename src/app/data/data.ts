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

export const exercisesData: IData[] = [
  {
    id: 1,
    image:
      'https://s3-alpha-sig.figma.com/img/0c35/0c25/638379f8392a90a097f001eb956d535a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aEvZdRI-MBAOsnfSttUTS8ySpRR2VIlpPW2QAc31aGO48VfRlMi02OAcrVaijZkVS5qhaplWIbaR0X7fm53LfRkpeoE4EzoDo5djT98ip0LqzQuoZujA2LIEi8oPIWDXZYo5BMQgB~0Wy~SntP9aKyyUhinz1LdwLPt5WlbK3nuUzzihtBDNhjem8SvF7awgzgxdJXLHIuDgF0lpAjfKHSfs02Xu7848ezDt1uKioq4nVasPtl6HYiE0QuvV-JgJwLnA~s2C00AkhZsJtaCy2YxIvllhe3Kr9bHftWeENCpW0evx~SjmeO2QRVUjmcwF7KxoQk2l1IQyM~eOyrtoLQ__',
    type: ETypeData.EXERCISE,
    youtubeId: 'UsH2ppREeQo',
    title: 'Các bài tập người già nên tránh',
    description:
      'Tập luyện là một cách tốt để người già duy trì sức khỏe, nhưng không phải bài tập nào cũng an toàn. Một số bài tập có thể gây nguy hiểm hoặc làm tăng nguy cơ chấn thương. Dưới đây là các bài tập mà người lớn tuổi nên tránh và các giải pháp thay thế an toàn hơn.',
    body: [
      {
        title: '1. Các Bài Tập Sử Dụng Tạ Nặng',
        content:
          'Tạ nặng tạo áp lực lên khớp và lưng, có thể gây chấn thương nghiêm trọng. Thay thế bằng tạ nhẹ hoặc bài tập với trọng lượng cơ thể.',
      },
      {
        title: '2. Chạy Bộ Dài',
        content:
          'Chạy bộ dài có thể gây căng thẳng lên khớp gối, hông và lưng. Thay thế bằng đi bộ nhanh hoặc bơi lội.',
      },
      {
        title: '3. Bài Tập Squat Sâu',
        content:
          'Squat sâu gây áp lực lên khớp gối và hông. Thay thế bằng squat nông hoặc đứng lên ngồi xuống với ghế.',
      },
      {
        title: '4. Bài Tập Bằng Máy Chống Đẩy (Leg Press Machine)',
        content:
          'Máy chống đẩy chân có thể gây tổn thương khớp gối và lưng. Thay thế bằng dây đàn hồi hoặc các bài tập dưới nước.',
      },
      {
        title: '5. Nhảy Cao Và Các Bài Tập Cường Độ Cao (Plyometrics)',
        content:
          'Nhảy cao dễ gây tổn thương dây chằng và khớp. Thay thế bằng thể dục nhịp điệu nhẹ nhàng hoặc đi bộ theo nhạc.',
      },
      {
        title: '6. Bài Tập Plank Với Thời Gian Dài',
        content:
          'Plank lâu có thể gây đau lưng. Thay thế bằng plank ngắn hoặc các bài tập cơ bụng nhẹ nhàng hơn.',
      },
      {
        title: '7. Các Bài Tập Xoay Người Quá Mức',
        content:
          'Xoay người mạnh dễ tổn thương cột sống. Thay thế bằng các động tác xoay nhẹ nhàng và có kiểm soát.',
      },
      {
        title: '8. Động Tác Ngồi Gập Bụng (Sit-ups)',
        content:
          'Sit-ups có thể gây căng thẳng lên cột sống. Thay thế bằng các bài tập nghiêng chéo hoặc nâng chân nhẹ.',
      },
    ],
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBValfWNY9YpxnckUluAoOVong6r5w5xuVhg&s',
    youtubeId: 'UsH2ppREeQo',
    type: ETypeData.EXERCISE,
    title: 'Các Bài Tập Sức Khỏe Phù Hợp Cho Người Già',
    description:
      'Tập thể dục thường xuyên có lợi cho sức khỏe của người cao tuổi, giúp tăng cường sức mạnh, giữ gìn sự linh hoạt và cải thiện tâm trạng. Dưới đây là một số bài tập an toàn và hiệu quả dành cho người già.',
    body: [
      {
        title: '1. Đi Bộ',
        content:
          'Đi bộ là bài tập nhẹ nhàng, không gây căng thẳng lên khớp, phù hợp với mọi người ở mọi độ tuổi. Đi bộ 30 phút mỗi ngày giúp cải thiện tim mạch, lưu thông máu và giảm căng thẳng.',
      },
      {
        title: '2. Thể Dục Nhịp Điệu Nhẹ',
        content:
          'Thể dục nhịp điệu nhẹ với các động tác tay chân giúp tăng cường sự linh hoạt, cải thiện nhịp tim và giúp duy trì sức khỏe tổng thể. Các lớp thể dục dành cho người già thường có hướng dẫn an toàn và bài tập phù hợp.',
      },
      {
        title: '3. Bài Tập Kéo Dãn Cơ',
        content:
          'Kéo dãn cơ là một phần quan trọng để duy trì sự linh hoạt và ngăn ngừa cứng khớp. Tập kéo dãn mỗi ngày giúp tăng cường sự linh động của khớp, giảm căng cơ và giảm nguy cơ chấn thương.',
      },
      {
        title: '4. Yoga Hoặc Thái Cực Quyền',
        content:
          'Yoga và Thái Cực Quyền giúp cải thiện thăng bằng, linh hoạt và sự thư giãn tinh thần. Các động tác chậm rãi và có kiểm soát của Thái Cực Quyền giúp tăng cường thăng bằng và giảm nguy cơ té ngã ở người cao tuổi.',
      },
      {
        title: '5. Bài Tập Tăng Cường Sức Mạnh',
        content:
          'Bài tập tăng cường sức mạnh, như nâng tạ nhẹ hoặc sử dụng dây đàn hồi, giúp tăng cường cơ bắp và xương khớp, cải thiện khả năng di chuyển hàng ngày. Hãy tập luyện với mức độ vừa phải, phù hợp với thể trạng.',
      },
      {
        title: '6. Bài Tập Thở Và Thư Giãn',
        content:
          'Các bài tập thở sâu và thư giãn giúp cải thiện chức năng hô hấp và giảm căng thẳng. Dành 10-15 phút mỗi ngày để thực hiện các bài tập thở sâu, giúp cung cấp oxy tốt hơn cho cơ thể và tinh thần.',
      },
      {
        title: '7. Bơi Lội',
        content:
          'Bơi lội là một bài tập toàn thân tuyệt vời, không gây áp lực lên các khớp, đồng thời giúp tăng cường sức mạnh cơ bắp và cải thiện tim mạch. Đây là hoạt động lý tưởng cho người cao tuổi bị đau khớp hoặc viêm khớp.',
      },
    ],
  },
]

export const totalData = [...technologyData, ...exercisesData]
