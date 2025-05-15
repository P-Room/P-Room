import ResumeDetail from '@/components/ResumeDetail'
import ResumeInfo from '@/components/ResumeInfo'
import SaveBar from '@/components/SaveBar'
import { tm } from '@/utils/tw-merge'

function WriteResume() {
  return (
    <>
      <h1
        className={tm(
          'text-center md:text-3xl text-2xl font-bold',
          'mt-8 mb-12'
        )}
      >
        새 글 작성
      </h1>
      <div className={tm('flex flex-col gap-8 mb-16')}>
        <ResumeInfo sort="기업" />
        <ResumeInfo sort="공고 링크" />
        <ResumeInfo sort="직무" />
        <ResumeInfo sort="요구 경력" />
        <ResumeInfo sort="기간" />
      </div>
      <ResumeDetail />
      <SaveBar />
    </>
  )
}

export default WriteResume
