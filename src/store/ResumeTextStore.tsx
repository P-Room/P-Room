import { create } from 'zustand'

interface ResumeTextStoreStates {
  resumeTextList: string[]
  hashTags: string[][]
  resumeListTitle: string[]
}

interface ResumeTextStoreActions {
  setResumeTextList: (input: string[]) => void
  setHashTagsList: (input: string[][]) => void
  setResumeTitleList: (input: string[]) => void
}

type ResumeTextStoreProps = ResumeTextStoreStates & ResumeTextStoreActions

const useResumeTextStore = create<ResumeTextStoreProps>((set) => ({
  resumeTextList: [],
  hashTags: Array.from({ length: 5 }, () => []),
  resumeListTitle: [],

  setResumeTextList: (input: string[]) =>
    set(() => ({
      resumeTextList: input,
    })),

  setHashTagsList: (input: string[][]) =>
    set(() => ({
      hashTags: input,
    })),

  setResumeTitleList: (input: string[]) =>
    set(() => ({
      resumeListTitle: input,
    })),
}))

export default useResumeTextStore
