import useHeaderDropdownStore from '@/store/HeaderDropdownStore'
import useSearchStore from '@/store/SearchStore'
import { tm } from '@/utils/tw-merge'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Button from './Button'
import HeaderModal from './HeaderModal'

function LoggedInHeader() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 모달의 오픈 여부 및 검색 키워드 할당하기 위한 상태 저장소
  const { isOpen, setIsOpen } = useHeaderDropdownStore()
  const { searchKeyword, setSearchKeyword } = useSearchStore()

  // 검색 이벤트
  const handleSearch = (formData: FormData) => {
    const query = formData.get('search') + ''
    if (query?.length < 1) {
      alert('검색어를 입력해주세요')
      return
    }
    setSearchKeyword(query)
    router.push(`/keyword?search=${query}`)
  }

  // 글쓰기 페이지로 이동시키는 이벤트
  const handleMoveWrite = () => {
    router.push('/write-resume')
  }

  // 드랍다운을 나타낼 이벤트
  const handleShowDropdown = () => {
    setIsOpen()
  }

  // 초기에 검색바에 사용자가 설정한 검색 키워드를 나타내는 사이드 이펙트
  useEffect(() => {
    const search = searchParams.get('search')
    setSearchKeyword(search ?? '')
  }, [searchParams, setSearchKeyword])

  return (
    <>
      <form
        action={handleSearch}
        className="flex flex-row gap-4 h-full items-center"
      >
        <p className="bg-gray-400 md:w-40 w-20 h-4/5">로고</p>
        <div className="relative md:flex md:justify-center border border-primary rounded-2xl px-2 hidden">
          <label htmlFor="searchbar" className="sr-only">
            검색어를 입력해주세요
          </label>
          <input
            name="search"
            id="searchbar"
            type="text"
            placeholder="검색어를 입력해주세요"
            className={tm('h-12 md:w-100 focus:outline-none')}
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
        <HeaderModal />
      </div>
    </>
  )
}

export default LoggedInHeader
