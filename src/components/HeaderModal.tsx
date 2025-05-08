import { tm } from '@/utils/tw-merge'

function HeaderModal() {
  return (
    <div
      className={tm(
        'bg-light-primary w-fit p-3 flex flex-col gap-1 rounded-2xl absolute top-9/10 right-1/50 md:right-1/70 z-999'
      )}
    >
      <div
        className={tm(
          'absolute -top-1 right-3 w-3 h-3 bg-light-primary rotate-45'
        )}
      ></div>
      <button
        type="button"
        className="hover:font-bold cursor-pointer text-white"
      >
        로그아웃
      </button>
      <button
        type="button"
        className="hover:font-bold cursor-pointer text-red-700"
      >
        회원탈퇴
      </button>
    </div>
  )
}

export default HeaderModal
