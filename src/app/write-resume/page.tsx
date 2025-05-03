import ResumeDetail from '@/components/ResumeDetail'
import ResumeInfo from '@/components/ResumeInfo'
import { tm } from '@/utils/tw-merge'

function WriteResume() {
  return (
    <>
      <h1 className={tm('text-center text-3xl font-bold', 'mt-8 mb-12')}>
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
    </>
  )
}

export default WriteResume
