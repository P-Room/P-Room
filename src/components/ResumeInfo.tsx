import { tm } from '@/utils/tw-merge'
import Image from 'next/image'

interface ResumeInfoProps {
  sort: string
}

function ResumeInfo({ sort }: ResumeInfoProps) {
  return (
    <div
      className={tm(
        'flex gap-5 items-center w-3/5 m-auto py-3 px-5',
        'border-primary border-b'
      )}
    >
      <Image src="/icons/company.svg" alt="회사" width={24} height={24} />
      <label htmlFor={sort} className={tm('font-bold', 'w-25')}>
        기업
      </label>
      <input id={sort}></input>
    </div>
  )
}

export default ResumeInfo
