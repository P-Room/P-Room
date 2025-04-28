'use client'

import { useState, KeyboardEvent, ChangeEvent } from 'react'

function HashTag() {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputTag = (text: string) => {
    const trimmed = text.trim()

    if (trimmed.length > 0 && !tags.includes(trimmed)) {
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
    <div className="w-full p-2 border rounded-md">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-gray-500 cursor-pointer"
              onClick={() => removeTag(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="w-full outline-none"
        placeholder="해시태그를 입력 후 엔터 또는 쉼표를 눌러주세요"
        value={inputValue}
        onChange={handleInputText}
        onKeyDown={handleInsertHashTag}
      />
    </div>
  )
}

export default HashTag
