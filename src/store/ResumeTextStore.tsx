import { create } from 'zustand'

interface ResumeTextStoreStates {
  resumeTextList: string[]
  hashTags: string[]
  resumeInfo: string[]
  resumeListTitle: string[]
}

interface ResumeTextStoreActions {
  setResumeTextList: (input: string[]) => void
}

type ResumeTextStoreProps = ResumeTextStoreStates & ResumeTextStoreActions

const useResumeTextStore = create<ResumeTextStoreProps>((set) => ({
  resumeTextList: [],
  hashTags: [],
  resumeInfo: [],
  resumeListTitle: [],

  setResumeTextList: (input: string[]) =>
    set(() => ({
      resumeTextList: input,
    })),
}))

export default useResumeTextStore
