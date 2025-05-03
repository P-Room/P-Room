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
      <p className="bg-gray-400 w-40 h-12">로고</p>
      <Button fill={true} wid={28} onClick={handleMoveToLogin}>
        로그인
      </Button>
    </>
  )
}

export default LoggedOutHeader
