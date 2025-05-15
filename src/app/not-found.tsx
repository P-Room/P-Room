import Link from 'next/link'

function NotFound() {
  return (
    <div>
      <h1>Not Found - 404!</h1>
      <Link href="/">Go Back To Home</Link>
    </div>
  )
}

export default NotFound
