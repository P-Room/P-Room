'use client'

import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import CustomDatePicker from './CustomDatePicker'
import CustomDropdown from './CustomDropdown'
import useResumeInfoStore from '@/store/ResumeInfoStore'
import { ChangeEvent } from 'react'

interface ResumeInfoProps {
  sort: '기업' | '공고 링크' | '직무' | '요구 경력' | '기간'
}

function ResumeInfo({ sort }: ResumeInfoProps) {
  const { setResumeCompany, setResumeLink, setResumeDuty } =
    useResumeInfoStore()

  let src: string = 'company'
  switch (sort) {
    case '기업':
      src = 'company.svg'
      break
    case '공고 링크':
      src = 'link.svg'
      break
    case '직무':
      src = 'duty.svg'
      break
    case '요구 경력':
      src = 'require.svg'
      break
    case '기간':
      src = 'duedate.svg'
      break
  }

  const handleSetInfo = (e: ChangeEvent<HTMLInputElement>) => {
    if (sort === '기업') {
      setResumeCompany(e.target.value)
    } else if (sort === '공고 링크') {
      setResumeLink(e.target.value)
    } else {
      setResumeDuty(e.target.value)
    }
  }

  return (
    <div
      className={tm(
        'flex gap-5 items-center md:w-3/5 w-4/5 m-auto py-3 px-5',
        'border-primary border-b'
      )}
    >
      <Image src={`/icons/${src}`} alt={sort} width={24} height={24} />
      <label
        htmlFor={sort}
        className={tm('font-bold', 'w-25 whitespace-nowrap')}
      >
        {sort}
      </label>
      {sort === '기간' ? (
        <>
          <CustomDatePicker sort={sort} />
        </>
      ) : sort === '요구 경력' ? (
        <CustomDropdown className={tm('w-4/5')} />
      ) : (
        <input
          type="text"
          id={sort}
          placeholder={`${sort} 정보를 입력해주세요.`}
          className={tm('py-1 px-1 w-4/5')}
          onChange={(input) => handleSetInfo(input)}
        />
      )}
    </div>
  )
}

export default ResumeInfo
