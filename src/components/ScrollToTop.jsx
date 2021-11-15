import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* useLoaction返回当前url信息 */
/* 记录跳转页面之前的位置，退回回到跳转之前的页面位置 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
