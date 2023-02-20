import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HelloPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return <></>
}

export default HelloPage
