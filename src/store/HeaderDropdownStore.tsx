import { create } from 'zustand'

interface HeaderDropdownStoreStates {
  isOpen: boolean
}

interface HeaderDropdownStoreActions {
  setIsOpen: () => void
}

type HeaderDropdownStoreProps = HeaderDropdownStoreStates &
  HeaderDropdownStoreActions

const useHeaderDropdownStore = create<HeaderDropdownStoreProps>((set) => ({
  isOpen: false,

  setIsOpen: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }))
  },
}))

export default useHeaderDropdownStore
