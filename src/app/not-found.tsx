import Link from 'next/link'

function NotFound() {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center gap-2 mx-auto text-center md:translate-y-[10%]">
      <h1 className="font-bold text-secondary text-3xl md:text-5xl mb-10">
        404 ERROR
      </h1>
      <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <p>존재하지 않는 주소를 입력하셨거나,</p>
      <p>요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다.</p>
      <span className="w-1/2 bg-secondary h-50 text-center my-5">로고</span>
      <Link href="/" className="underline hover:text-primary my-4">
        홈으로
      </Link>
    </div>
  )
}

export default NotFound
