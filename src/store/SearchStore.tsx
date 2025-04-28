import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchStoreStates {
  searchKeyword: string
}

interface SearchStoreActions {
  setSearchKeyword: (input: string) => void
}

type SearchStoreProps = SearchStoreStates & SearchStoreActions

const useSearchStore = create(
  persist<SearchStoreProps>(
    (set) => ({
      searchKeyword: '',

      setSearchKeyword: (input: string) =>
        set(() => ({
          searchKeyword: input,
        })),
    }),
    {
      name: '검색어 저장소',
    }
  )
)

export default useSearchStore
