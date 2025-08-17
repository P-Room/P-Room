import ResumeListItem from '@/components/ResumeListItem'
import WriteButton from '@/components/WriteButton'
import { tm } from '@/utils/tw-merge'

function ResumeList() {
  return (
    <>
      <h1
        className={tm(
          'text-center font-bold md:text-3xl text-2xl',
          'mt-8 mb-12'
        )}
      >
        작성글 목록
      </h1>
      <div className={tm('flex flex-col gap-6 mb-10')}>
        <ResumeListItem
          title="제목 1asdfasdfawefasdfzsdvaselufhjal;kjf;zlkxjvloiuwaen.fkjznxdl;ofihjawep;oifj.zlkdjf"
          duedate={['2025-05-01', '2025-05-03']}
          hashtag={['행복', '소망', '사랑']}
        />
        <ResumeListItem
          title="제목 2"
          duedate={['2025-05-01', '2025-05-03']}
          hashtag={['행복', '소망', '사랑']}
        />
        <ResumeListItem
          title="제목 3"
          duedate={['2025-05-01', '2025-05-03']}
          hashtag={['행복', '소망', '사랑']}
        />
        <ResumeListItem
          title="제목 4"
          duedate={['2025-05-01', '2025-05-03']}
          hashtag={['행복', '소망', '사랑']}
        />
      </div>
      <WriteButton />
    </>
  )
}

export default ResumeList
