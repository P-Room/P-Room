import { tm } from '@/utils/tw-merge'

function HeaderModal() {
  return (
    <div
      className={tm(
        'bg-secondary w-fit p-3 flex flex-col gap-1 rounded-2xl absolute top-9/10 right-1/50 md:right-1/70 z-999'
      )}
    >
      <div
        className={tm('absolute -top-1 right-3 w-3 h-3 bg-secondary rotate-45')}
      ></div>
      <button
        type="button"
        className="bg-amber-500 hover:text-amber-200 cursor-pointer"
      >
        로그아웃
      </button>
      <button>로그아웃</button>
    </div>
  )
}

export default HeaderModal
