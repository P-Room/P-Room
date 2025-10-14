'use client'

import useResumeTextStore from '@/store/ResumeTextStore'
import { tm } from '@/utils/tw-merge'
import { useState, KeyboardEvent, ChangeEvent } from 'react'

function HashTag({ id }: React.ComponentProps<'input'>) {
  // 해쉬태그들과 값을 받아오는 상태
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const { hashTags, setHashTagsList } = useResumeTextStore()

  // 엔터키나 쉼표키를 누르게 되면 발생하는 이벤트
  const handleInputTag = (text: string) => {
    const trimmed = text.trim()

    if (trimmed.length > 0 && !tags.includes(`#${trimmed}`)) {
      setTags([...tags, trimmed.startsWith('#') ? trimmed : `#${trimmed}`])
    }
  }

  // keydown이벤트 (엔터 혹은 쉼표 입력 시)
  const handleInsertHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      handleInputTag(inputValue)
      setInputValue('')

      const nextHashTagsList = hashTags
      nextHashTagsList[Number(id)].push(inputValue)
      setHashTagsList(nextHashTagsList)
    }
  }

  // input의 값을 관찰하는 이벤트
  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // 해쉬태그를 목록에서 제거하는 이벤트
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full">
      <div
        className={`${tags.length > 0 ? '' : 'sr-only'} flex flex-wrap gap-2 mb-2`}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-secondary font-bold text-white rounded-full px-3 py-1"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-white cursor-pointer"
              onClick={() => removeTag(index)}
              aria-label="삭제"
            >
              🇽
            </button>
          </div>
        ))}
      </div>
      <label htmlFor={id} className="sr-only">
        해쉬태그를 입력해주세요
      </label>
      <input
        type="text"
        id={id}
        className={tm(
          'w-full p-1 outlie-none rounded-lg',
          'focus:outline-2 focus:outline-primary'
        )}
        placeholder="해쉬태그를 입력해주세요."
        value={inputValue}
        onChange={handleInputText}
        onKeyDown={handleInsertHashTag}
      />
    </div>
  )
}

export default HashTag
