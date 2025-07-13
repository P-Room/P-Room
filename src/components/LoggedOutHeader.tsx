import { useRouter } from 'next/navigation'
import Button from './Button'

function LoggedOutHeader() {
  const router = useRouter()

  // 로그인 페이지로 이동
  const handleMoveToLogin = () => {
    router.push('/login')
  }

  return (
    <>
      <p className="bg-gray-400 md:w-40 w-20 h-4/5">로고</p>
      <Button fill={true} onClick={handleMoveToLogin}>
        로그인
      </Button>
    </>
  )
}

export default LoggedOutHeader
