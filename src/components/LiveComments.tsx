import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './Layout';
import { MessageSquare } from 'lucide-react';

const fanNames = [
  'nox_lover', 'ASH_0912', 'seowoo_cat', '은호기타피크', 
  'studio_ghost', '지호픽', 'nox_kiri_fan', '과몰입러', 
  '은혁맘', '네로집사', '드럼러츠', '사장님팬', 
  'ASH_001', '과제하기싫다', '홍대고인물'
];

const commentsPool = [
  "오늘 라이브 미쳤음... 형원 베이스 솔로 미쳤나 진짜 🎸🔥",
  "은혁오빠 제발 잠 좀 자 ㅠㅠ 커피 그만 마시고 구석에서 졸고 있잖아 🥺",
  "하 서우 눈빛에 치이고 갑니다.. 네로랑 투샷 올려주세요 제발 🐈‍⬛",
  "아니 박은호 오늘 또 지각했다며 ㅋㅋㅋ 은혁이형 극대노한거 영상좀 다오",
  "노이즈랩 사장님 안경 박제 부탁드립니다... 👓✨",
  "최지호 무심하게 드럼 스틱 돌리는거 나만 봤어...? 나 치였어 치였어 🥁",
  "녹스끼리 뉴에피 언제 떠요 숨넘어감 ㅠㅠ 애들 관계성 돌아버려 진짜 💞",
  "차형원 박은호 볼 때 눈빛 너무 다정하지 않음? 나 진짜 미쳐 🫠",
  "오늘도 서우 챙기는 건 은혁이 뿐이네... 이쯤되면 공식 보호자 🛡️",
  "한서우 입술 밑 점 사랑하는 모임 (1/999999) 💋",
  "지호 오늘 알바하다가 또 투덜댔다에 내 전재산 건다 ㅋㅋㅋ 귀여움",
  "재현사장님 결혼하신다구요? 제 첫사랑이 여기서 끝납니다... 😭💍",
  "형원이 오늘 또 줄 이어폰 끼고 혼자 뭐 들어... 나도 알려줘 🎧",
  "와 오늘 봄봄 카페 갔는데 은호 오빠 알바하더라 비주얼 미침 ☕️✨",
  "녹스 단콘 언제해 제발 내 통장 가져가 💸💸",
];

interface Comment {
  id: number;
  user: string;
  text: string;
}

export function LiveComments() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    let commentId = 0;
    
    const initial = Array.from({ length: 4 }).map(() => ({
      id: ++commentId,
      user: fanNames[Math.floor(Math.random() * fanNames.length)],
      text: commentsPool[Math.floor(Math.random() * commentsPool.length)],
    }));
    setComments(initial);

    const interval = setInterval(() => {
      setComments(prev => {
        const newComment = {
          id: ++commentId,
          user: fanNames[Math.floor(Math.random() * fanNames.length)],
          text: commentsPool[Math.floor(Math.random() * commentsPool.length)],
        };
        // 최신 댓글을 맨 위에 추가 (최대 10개 유지)
        return [newComment, ...prev].slice(0, 10);
      });
    }, Math.random() * 2000 + 2000); // 2~4초마다 랜덤하게 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-red-500 animate-pulse" />
        <h2 className="text-2xl md:text-4xl font-bold font-sans tracking-tight text-white">LIVE CHAT</h2>
        <span className="bg-red-500/20 border border-red-500/30 text-red-400 text-xs px-2.5 py-1 rounded-full font-bold ml-2 font-mono flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          ASH
        </span>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-4 md:p-8 h-[450px] overflow-hidden relative flex flex-col justify-end">
        {/* 상단 페이드 아웃 효과 */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0e0e11] to-transparent z-10 pointer-events-none rounded-t-3xl border-t border-zinc-800/80" />
        
        <div className="flex flex-col-reverse gap-4 relative z-0">
          <AnimatePresence initial={false}>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                className="bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-3 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400 uppercase overflow-hidden">
                      {comment.user.charAt(0)}
                    </div>
                    <span className="font-mono text-xs md:text-sm font-bold text-zinc-300">{comment.user}</span>
                  </div>
                  <span className="text-[10px] text-zinc-600 font-mono">Just now</span>
                </div>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-sans">{comment.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
