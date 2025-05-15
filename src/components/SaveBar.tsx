import { tm } from '@/utils/tw-merge'

function SaveBar() {
  return (
    <div
      className={tm(
        'w-full shadow-[0px_-2px_2px_0px_rgba(0,0,0,0.25)] bg-white',
        'py-4 px-4 sticky bottom-0 z-999',
        'flex flex-row justify-between'
      )}
    >
      <button type="button">나가기</button>
      <button type="button">저장하기</button>
    </div>
  )
}

export default SaveBar
