'use client'

import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import useHeaderDropdownStore from './../store/HeaderDropdownStore'
import useSearchStore from '@/store/SearchStore'
import { useEffect } from 'react'
import Button from './Button'

function Header() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { isOpen, setIsOpen } = useHeaderDropdownStore()
  const { searchKeyword, setSearchKeyword } = useSearchStore()

  const handleSearch = (formData: FormData) => {
    const query = formData.get('search') + ''
    if (query?.length < 1) {
      alert('검색어를 입력해주세요')
      return
    }
    setSearchKeyword(query)
    router.push(`/keyword?search=${query}`)
  }

  const handleMoveWrite = () => {
    router.push('/write-resume')
  }

  const handleShowDropdown = () => {
    setIsOpen()
  }

  useEffect(() => {
    const search = searchParams.get('search')
    setSearchKeyword(search ?? '')
  }, [searchParams, setSearchKeyword])

  return (
    <div
      className={tm(
        'flex flex-row justify-between items-center',
        'w-full h-16 py-2 pl-4 pr-8',
        'shadow-[0_2px_4px_rgba(0,0,0,0.25)]',
        // 추후 삭제
        'mb-4'
      )}
    >
      <form action={handleSearch} className="flex flex-row gap-4">
        <p className="bg-gray-400 w-40 h-12">로고</p>
        <div className="relative flex justify-center border border-primary rounded-2xl px-2">
          <label htmlFor="searchbar" className="sr-only">
            검색어를 입력해주세요
          </label>
          <input
            name="search"
            id="searchbar"
            type="text"
            placeholder="검색어를 입력해주세요"
            className={tm('h-12 w-100 focus:outline-none')}
            defaultValue={searchKeyword}
          />
          <button type="submit" className="cursor-pointer">
            <Image
              src="/icons/search.svg"
              alt="검색하기"
              width={32}
              height={32}
            />
          </button>
        </div>
      </form>
      <div className="flex flex-row gap-4 items-center">
        <Button fill={false} wid={28} onClick={handleMoveWrite}>
          새 글 쓰기
        </Button>
        <button
          className={tm(
            'cursor-pointer h-12',
            'flex flex-row gap-2 items-center',
            'hover:font-bold'
          )}
          onClick={handleShowDropdown}
        >
          닉네임
          <Image
            src="/icons/nickname-dropdown.svg"
            alt="회원 정보"
            width={24}
            height={24}
          />
        </button>
        {isOpen ? <div>ㅎ</div> : null}
      </div>
    </div>
  )
}

export default Header
