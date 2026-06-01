import { Photo } from './types';

export const photos: Photo[] = [
  // 박은혁
  {
    id: "p1", charId: "eunhyuk",
    url: "https://i.postimg.cc/QtXFyrvF/1.png",
    caption: "야근의 연속... 퇴근하고 합주가야되는데 🤦‍♂️",
    likes: 1240,
    comments: [
      { user: "eunho_nox", text: "형 지각하면 커피 쏜다 ㅋㅋㅋ" },
      { user: "seowoo_nox", text: "은혁형 무리하지마 🥺" }
    ]
  },
  {
    id: "p2", charId: "eunhyuk",
    url: "https://i.postimg.cc/YqCHPPv1/11.png",
    caption: "어제 클럽 공연. 다들 수고했어.",
    likes: 3420,
    comments: [
      { user: "nox_lover", text: "키보드 치는거 진짜 미쳤어요 오빠 ㅠㅠ" }
    ]
  },
  {
    id: "p3", charId: "eunhyuk",
    url: "https://i.postimg.cc/YqsJsCKH/14.png",
    caption: "말 안 듣지 또.",
    likes: 2150,
    comments: [
      { user: "seowoo_nox", text: "아 안 핀다고 했잖아 ㅡㅡ" },
      { user: "jiho_nox", text: "담배 냄새 빼고 들어오세요 좀." }
    ]
  },
  // 박은호
  {
    id: "p4", charId: "eunho",
    url: "https://i.postimg.cc/bwYjKBdC/5.png",
    caption: "스트레스 받을 땐 걷는게 최고 🎸 스티커 새거 하나 더 붙임",
    likes: 4120,
    comments: [
      { user: "hyungwon_nox", text: "어디야" },
      { user: "eunho_lover", text: "은호오빠 ㅠㅠ 저 기타케이스가 되고싶어요" }
    ]
  },
  {
    id: "p5", charId: "eunho",
    url: "https://i.postimg.cc/V6wyWZyM/12.png",
    caption: "오늘 텐션 최고였음 🤘 ASH 미쳤다",
    likes: 5600,
    comments: [
      { user: "ash_01", text: "은호 기타 솔로 평생 소장각;;; 🔥🔥" }
    ]
  },
  {
    id: "p6", charId: "eunho",
    url: "https://i.postimg.cc/cHtKfHSw/6.png",
    caption: "대체 왜 여기서 자는건데 ㅋㅋㅋㅋㅋㅋ 찍는것도 모름",
    likes: 3200,
    comments: [
      { user: "hyungwon_nox", text: "지워." },
      { user: "seowoo_nox", text: "방음벽 다 뜯어지고 난리났네" }
    ]
  },
  // 한서우
  {
    id: "p7", charId: "seowoo",
    url: "https://i.postimg.cc/fbhRtKbd/2.png",
    caption: "네로랑 주말보내기 🐈‍⬛",
    likes: 6200,
    comments: [
      { user: "eunhyuk_nox", text: "밥은 먹고 놀아라." },
      { user: "eunho_nox", text: "고양이 나만 없어 나만 😡" }
    ]
  },
  {
    id: "p8", charId: "seowoo",
    url: "https://i.postimg.cc/44BCp1W6/13.png",
    caption: "오랜만에 무대. 다들 반가웠어.",
    likes: 7100,
    comments: [
      { user: "seowoo_cat", text: "음색 진짜 도랐다... 맨날 노래해줘 ㅠㅠ" }
    ]
  },
  // 차형원
  {
    id: "p9", charId: "hyungwon",
    url: "https://i.postimg.cc/zB8MgLWp/15.png",
    caption: "기록.",
    likes: 3800,
    comments: [
      { user: "eunho_nox", text: "형원이 오늘 기분 좋았네? ㅋㅋㅋㅋ" },
      { user: "jiho_nox", text: "베이스 앰프 선 좀 정리하고 가셈" }
    ]
  },
  // 최지호
  {
    id: "p10", charId: "jiho",
    url: "https://i.postimg.cc/zvMJJwMr/3.png",
    caption: "비는 왜 오고 난리...",
    likes: 1900,
    comments: [
      { user: "jaehyun_lab", text: "우산 없는 줄 알고 마중나갔더니 ㅋㅋ" },
      { user: "jiho_nox", text: "@jaehyun_lab 사장님 제발 톡 좀 보쇼" }
    ]
  },
  {
    id: "p11", charId: "jiho",
    url: "https://i.postimg.cc/1zc7s9Ts/16.png",
    caption: "공연 끝. 피곤하다.",
    likes: 2100,
    comments: [
      { user: "eunho_nox", text: "지호 수고했다~~! 낼 스튜디오에서 봐" },
      { user: "ash_drum", text: "드럼 칠 때 눈빛 살벌한거 완전 섹시해 ㅠㅠㅠ" }
    ]
  },
  // 윤재현
  {
    id: "p12", charId: "jaehyun",
    url: "https://i.postimg.cc/L4r5F2ML/4.png",
    caption: "데모 믹싱 중 🎛️ NOX 애들 곡 잘 뽑혔네",
    likes: 1540,
    comments: [
      { user: "jiho_nox", text: "저도 무급 노동 중 ㅡㅡ" },
      { user: "eunhyuk_nox", text: "형 늘 고마워요." }
    ]
  },
  {
    id: "p13", charId: "jaehyun",
    url: "https://i.postimg.cc/tTv547zY/17.png",
    caption: "싸이월드 털다가 발견함... 내 청춘 어디갔냐 🚬",
    likes: 2300,
    comments: [
      { user: "eunho_nox", text: "와 사장님 레전드네 이 형 날아다녔겠네" },
      { user: "eunhye_luv", text: "지금도 충분히 멋있어 울 오빠 ❤️" }
    ]
  },
  {
    id: "p14", charId: "jaehyun",
    url: "https://i.postimg.cc/2yB4jG64/18.png",
    caption: "오랜만에 기타 잡으니까 손가락 아프다 🎸",
    likes: 1800,
    comments: [
      { user: "hyungwon_nox", text: "베이스도 좀 쳐주세요" }
    ]
  },
  {
    id: "p15", charId: "jaehyun",
    url: "https://i.postimg.cc/rm7f9KtX/19.png",
    caption: "스튜디오 대관 끝. 맥주나 마시자 🍻😎",
    likes: 1950,
    comments: [
      { user: "seowoo_nox", text: "사장님 저도 한 잔만..." },
      { user: "jaehyun_lab", text: "@seowoo_nox 닌 술 약하잖아 주스 줄게" }
    ]
  },
  // 비밀 사진첩
  {
    id: "s1", charId: "secret",
    url: "https://i.postimg.cc/R0yhCBn8/7.png",
    caption: "[HIDDEN] 은혁 & 서우",
    likes: 0,
    comments: [
      { user: "System", text: "4년째 연애 중. 안정적이고 의존적인 관계." }
    ]
  },
  {
    id: "s2", charId: "secret",
    url: "https://i.postimg.cc/N03Gqk3f/8.png",
    caption: "[HIDDEN] 은호 & 형원",
    likes: 0,
    comments: [
      { user: "System", text: "1년째 연애 중. 충동적이고 묘한 긴장감." }
    ]
  },
  {
    id: "s3", charId: "secret",
    url: "https://i.postimg.cc/Mp4qVYKr/9.png",
    caption: "[HIDDEN] 은혁 & 형원",
    likes: 0,
    comments: [
      { user: "System", text: "아슬아슬한 바람. 이성적인 은혁을 흔드는 형원." }
    ]
  },
  {
    id: "s4", charId: "secret",
    url: "https://i.postimg.cc/rs8kMngf/10.png",
    caption: "[HIDDEN] 은호 & 서우",
    likes: 0,
    comments: [
      { user: "System", text: "위태로운 바람. 형의 애인을 건드리는 은호와 흔들리는 서우." }
    ]
  }
];
