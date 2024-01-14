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
              <Link href="/reset-detail-form">Reset detail form example</Link>
            </li>
            <li>
              <Link href="/load-image-eagerly">Load image eagerly example</Link>
            </li>
        </ul>
      </ul>
    </nav>
  )
}
