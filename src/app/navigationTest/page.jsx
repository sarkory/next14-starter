/**
 * 路由器钩子
 */
"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const NavigationTest = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(pathname)
  console.log(searchParams.get('a'))

  const handleClick = () => {
    console.log('clicked')
    // router.router('/')
    // router.replace('/')
    // router.refresh()
    router.back()
  }

  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTest;