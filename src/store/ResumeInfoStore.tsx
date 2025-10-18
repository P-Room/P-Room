import { create } from 'zustand'

interface ResumeInfoStoreStates {
  resumeCompany: string
  resumeLink: string
  resumeDuty: string
  resumeRequire: string
  resumeDueDate: [Date | null, Date | null]
}

interface ResumeInfoStoreActions {
  setResumeCompany: (input: string) => void
  setResumeLink: (input: string) => void
  setResumeDuty: (input: string) => void
  setResumeRequire: (input: string) => void
  setResumeDueDate: (input: [Date | null, Date | null]) => void
}

type ResumeTextStoreProps = ResumeInfoStoreStates & ResumeInfoStoreActions

const useResumeInfoStore = create<ResumeTextStoreProps>((set) => ({
  resumeCompany: '',
  resumeLink: '',
  resumeDuty: '',
  resumeRequire: '',
  resumeDueDate: [null, null],

  setResumeCompany: (input: string) =>
    set(() => ({
      resumeCompany: input,
    })),

  setResumeLink: (input: string) =>
    set(() => ({
      resumeLink: input,
    })),

  setResumeDuty: (input: string) =>
    set(() => ({
      resumeDuty: input,
    })),

  setResumeRequire: (input: string) =>
    set(() => ({
      resumeRequire: input,
    })),

  setResumeDueDate: (input: [Date | null, Date | null]) =>
    set(() => ({
      resumeDueDate: input,
    })),
}))

export default useResumeInfoStore
