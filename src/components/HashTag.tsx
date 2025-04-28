'use client'

import { tm } from '@/utils/tw-merge'
import { useState, KeyboardEvent, ChangeEvent } from 'react'

function HashTag() {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputTag = (text: string) => {
    const trimmed = text.trim()

    if (trimmed.length > 0 && !tags.includes(`#${trimmed}`)) {
      setTags([...tags, trimmed.startsWith('#') ? trimmed : `#${trimmed}`])
    }
  }

  const handleInsertHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      handleInputTag(inputValue)
      setInputValue('')
    }
  }

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full p-2">
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
      <input
        type="text"
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
