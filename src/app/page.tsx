'use client';
import Link from 'next/link'
 
export default function Page() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/profiles">Profiles example</Link>
        </li>
        <li>
          <Link href="/clock">Clock example</Link>
        </li>
        <li>
          <Link href="/input">Food example</Link>
        </li>
      </ul>
    </nav>
  )
}
