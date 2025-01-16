import { auth } from '@/auth'
import Link from 'next/link'

export default async function Home () {
  const session = await auth()
  return (
    <>
      <h1>Hello</h1>
      {session?.user && <pre>{JSON.stringify(session, null, 4)}</pre>}
      {!session?.user && <Link href='/api/auth/signin' className='bg-blue-500 px-6 py-2 rounded ease-in-out duration-300 hover:scale-105 hover:bg-blue-700 text-white '>Sign In</Link>}
      {session?.user && <Link href='/api/auth/signout' className='bg-red-500 px-6 py-2 rounded ease-in-out duration-300 hover:scale-105 hover:bg-red-700 text-white'>Sign Out</Link>}
    </>
  )
}
