import Button from './Button'

function LoggedOutHeader() {
  return (
    <>
      <p className="bg-gray-400 w-40 h-12">로고</p>
      <Button fill={true}>로그인</Button>
    </>
  )
}

export default LoggedOutHeader
