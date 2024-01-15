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
        <li>Input examples</li>
        <ul>
            <li>
              <Link href="/sync-inputs">Sync Inputs example</Link>
            </li>
            <li>
              <Link href="/filterable-list">Filterable list example</Link>
            </li>
            <li>
              <Link href="/input-text-with-hint">Input text with hint example</Link>
            </li>
            <li>
              <Link href="/swap-text-inputs">Swap text inputs example</Link>
            </li>
            <li>
              <Link href="/show-reverse-order">Contact list example</Link>
            </li>
            <li>
              <Link href="/synchronize-image-text">Synchronize image and text example</Link>
            </li>
        </ul>
        <li>
          <Link href="/chat">Chat example</Link>
        </li>
      </ul>
    </nav>
  )
}
