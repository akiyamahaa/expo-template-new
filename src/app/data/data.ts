import { images } from '@/constants'
import { ETypeData, IData } from '@/types/common'

export const videoData: IData[] = [
  {
    id: 1,
    image: images.post1,
    type: ETypeData.VIDEO,
    youtubeId: 'k8uMv-KDG_s',
    title: 'Cách nhận biết nguy cơ cháy nổ',
    description:
      'Cháy nổ là một trong những nguy cơ tiềm ẩn gây thiệt hại nghiêm trọng đến tính mạng và tài sản. Việc nhận biết sớm các nguy cơ cháy nổ có thể giúp chúng ta phòng tránh và hạn chế các hậu quả đáng tiếc. Bài viết này sẽ giúp bạn nhận diện các nguyên nhân phổ biến dẫn đến cháy nổ trong cuộc sống hàng ngày và cách phòng ngừa hiệu quả.',
    body: [
      {
        title: 'Nguyên nhân cháy nổ từ thiết bị điện',
        content:
          'Thiết bị điện bị hỏng, chập mạch, quá tải hay việc sử dụng dây điện không đúng tiêu chuẩn đều là những nguyên nhân phổ biến gây ra cháy nổ. Để phòng tránh, cần thường xuyên kiểm tra và bảo trì các thiết bị điện trong nhà.',
      },
      {
        title: 'Cháy nổ do các chất dễ cháy',
        content:
          'Các chất dễ cháy như xăng, dầu, gas nếu không được bảo quản đúng cách có thể dẫn đến cháy nổ. Đặc biệt, việc sử dụng nguồn nhiệt gần những chất này sẽ làm tăng nguy cơ cháy nổ.',
      },
      {
        title: 'Sử dụng lửa không an toàn',
        content:
          'Việc sử dụng lửa trong sinh hoạt như nấu ăn, đốt rác mà không có biện pháp an toàn có thể dẫn đến hỏa hoạn. Luôn cẩn thận với nguồn lửa và đảm bảo các thiết bị chữa cháy luôn sẵn sàng.',
      },
      {
        title: 'Ý nghĩa của việc phòng cháy chữa cháy',
        content:
          'Nhận diện sớm các nguy cơ cháy nổ và thực hiện các biện pháp phòng ngừa không chỉ giúp bảo vệ tài sản mà còn bảo vệ tính mạng con người. Hiểu rõ và tuân thủ quy định phòng cháy chữa cháy là trách nhiệm của mỗi cá nhân.',
      },
    ],
  },
  {
    id: 2,
    image: images.post2,
    type: ETypeData.VIDEO,
    youtubeId: 'rq8-L9C_bRE',
    title: 'Hướng Dẫn Gọi Cứu Hộ Khi Cần Thiết',
    description:
      'Khi gặp tình huống khẩn cấp như tai nạn giao thông, cháy nổ, hoặc sự cố đe dọa tính mạng, việc gọi cứu hộ kịp thời là rất quan trọng. Bài viết này sẽ cung cấp hướng dẫn chi tiết về cách gọi cứu hộ, những thông tin cần cung cấp và những lưu ý quan trọng để đảm bảo an toàn cho bạn và người xung quanh.',
    body: [
      {
        title: 'Bước 1: Xác định tình huống khẩn cấp',
        content:
          'Đầu tiên, hãy nhanh chóng đánh giá tình huống để xác định xem có cần thiết phải gọi cứu hộ hay không. Nếu bạn hoặc người xung quanh đang gặp nguy hiểm về tính mạng hoặc cần hỗ trợ khẩn cấp, hãy gọi ngay cho các dịch vụ cứu hộ như 113 (cảnh sát), 114 (cứu hỏa), hoặc 115 (cấp cứu y tế).',
      },
      {
        title: 'Bước 2: Gọi số cứu hộ phù hợp',
        content:
          'Dùng điện thoại để gọi đến số cứu hộ phù hợp với tình huống bạn đang gặp. Ví dụ:\n- 113: Báo cáo tai nạn giao thông, tội phạm, hoặc các tình huống đe dọa an ninh.\n- 114: Báo cáo cháy nổ, sự cố liên quan đến gas hoặc hóa chất nguy hiểm.\n- 115: Gọi cấp cứu y tế khi có người bị thương nặng hoặc đe dọa tính mạng.',
      },
      {
        title: 'Bước 3: Cung cấp thông tin cần thiết',
        content:
          'Khi liên lạc với dịch vụ cứu hộ, hãy bình tĩnh và cung cấp thông tin chi tiết bao gồm:\n- Địa điểm chính xác của sự cố (nếu có thể, mô tả cụ thể vị trí).\n- Loại sự cố (cháy, tai nạn, người bị thương...)\n- Số lượng người bị ảnh hưởng và mức độ nghiêm trọng của tình huống.\n- Các thông tin khác có thể giúp đội cứu hộ phản ứng nhanh hơn (ví dụ: lửa có lan rộng không, người bị thương có tỉnh táo không...).',
      },
      {
        title: 'Bước 4: Chờ cứu hộ và đảm bảo an toàn',
        content:
          'Sau khi gọi cứu hộ, hãy làm theo hướng dẫn của nhân viên trực tổng đài và cố gắng giữ an toàn cho bạn và người xung quanh. Trong trường hợp cháy nổ hoặc nguy hiểm khác, hãy tìm cách sơ tán đến nơi an toàn và chờ cứu hộ đến.',
      },
      {
        title: 'Lưu ý quan trọng khi gọi cứu hộ',
        content:
          '1. Luôn giữ bình tĩnh và trả lời các câu hỏi của tổng đài viên một cách rõ ràng.\n2. Tránh hoảng loạn hoặc cúp máy khi chưa được hướng dẫn.\n3. Nếu bạn không thể nói được, hãy tìm cách cung cấp thông tin qua tin nhắn hoặc sử dụng các ứng dụng khẩn cấp nếu có.\n4. Không gọi số cứu hộ nếu không thực sự cần thiết, vì có thể làm ảnh hưởng đến người đang gặp tình huống nguy hiểm hơn.',
      },
    ],
  },
]

export const lessonData: IData[] = [
  {
    id: 3,
    image: images.post1,
    type: ETypeData.LESSON,
    title: 'Cách nhận biết nguy cơ cháy nổ',
    description:
      'Cháy nổ là một trong những nguy cơ tiềm ẩn gây thiệt hại nghiêm trọng đến tính mạng và tài sản. Việc nhận biết sớm các nguy cơ cháy nổ có thể giúp chúng ta phòng tránh và hạn chế các hậu quả đáng tiếc. Bài viết này sẽ giúp bạn nhận diện các nguyên nhân phổ biến dẫn đến cháy nổ trong cuộc sống hàng ngày và cách phòng ngừa hiệu quả.',
    body: [
      {
        title: 'Nguyên nhân cháy nổ từ thiết bị điện',
        content:
          'Thiết bị điện bị hỏng, chập mạch, quá tải hay việc sử dụng dây điện không đúng tiêu chuẩn đều là những nguyên nhân phổ biến gây ra cháy nổ. Để phòng tránh, cần thường xuyên kiểm tra và bảo trì các thiết bị điện trong nhà.',
      },
      {
        title: 'Cháy nổ do các chất dễ cháy',
        content:
          'Các chất dễ cháy như xăng, dầu, gas nếu không được bảo quản đúng cách có thể dẫn đến cháy nổ. Đặc biệt, việc sử dụng nguồn nhiệt gần những chất này sẽ làm tăng nguy cơ cháy nổ.',
      },
      {
        title: 'Sử dụng lửa không an toàn',
        content:
          'Việc sử dụng lửa trong sinh hoạt như nấu ăn, đốt rác mà không có biện pháp an toàn có thể dẫn đến hỏa hoạn. Luôn cẩn thận với nguồn lửa và đảm bảo các thiết bị chữa cháy luôn sẵn sàng.',
      },
      {
        title: 'Ý nghĩa của việc phòng cháy chữa cháy',
        content:
          'Nhận diện sớm các nguy cơ cháy nổ và thực hiện các biện pháp phòng ngừa không chỉ giúp bảo vệ tài sản mà còn bảo vệ tính mạng con người. Hiểu rõ và tuân thủ quy định phòng cháy chữa cháy là trách nhiệm của mỗi cá nhân.',
      },
    ],
  },
]

export const totalData = [...videoData, ...lessonData]
