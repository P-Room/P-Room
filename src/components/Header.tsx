'use client'

import { tm } from '@/utils/tw-merge'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()

  const abc = (formData: FormData) => {
    const query = formData.get('search')
  }

  return (
    <div
      className={tm(
        'flex flex-row justify-between items-center',
        'w-full h-16 py-2 px-4',
        'shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
        // 추후 삭제
        'mb-4'
      )}
    >
      <form action={abc} className="flex flex-row gap-4">
        <p className="bg-gray-400 w-40 h-12">로고</p>
        <label htmlFor="searchbar" className="sr-only">
          검색어를 입력해주세요
        </label>
        <input
          name="search"
          id="searchbar"
          type="text"
          placeholder="검색어를 입력해주세요"
          className={tm('border border-primary rounded-2xl', 'w-100 px-2')}
        />
      </form>
      <div className="flex flex-row gap-4">
        <button type="button">새 글 쓰기</button>
        <p>닉네임</p>
      </div>
    </div>
  )
}

export default Header
