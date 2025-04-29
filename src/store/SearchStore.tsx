import { create } from 'zustand'

interface SearchStoreStates {
  searchKeyword: string
}

interface SearchStoreActions {
  setSearchKeyword: (input: string) => void
}

type SearchStoreProps = SearchStoreStates & SearchStoreActions

const useSearchStore = create<SearchStoreProps>((set) => ({
  searchKeyword: '',

  setSearchKeyword: (input: string) =>
    set(() => ({
      searchKeyword: input,
    })),
}))

export default useSearchStore
