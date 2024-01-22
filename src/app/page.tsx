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
              <Link href="/player">Player example</Link>
            </li>
        </ul>
        <li>Image examples</li>
        <ul>
            <li>
              <Link href="/synchronize-image-text">Synchronize image and text example</Link>
            </li>
            <li>
              <Link href="/list-with-thumbnail">List with thumbnail example</Link>
            </li>
        </ul>
        <li>
          <Link href="/chat">Chat example</Link>
        </li>
        <li>
          <Link href="/process-state-queue">Try to implement simple state queue myself!</Link>
        </li>
        <li>Shape example</li>
        <ul>
          <li>
            <Link href="/shape-with-useState">Shape example (with useState)</Link>
          </li>
          <li>
            <Link href="/shape-with-useImmer">Shape example (with useImmer)</Link>
          </li>
        </ul>
        <li>
          <Link href="/shopping-cart">Shopping cart example</Link>
        </li>
      </ul>
      <li>
        <Link href="/todo-list">Todo list example</Link>
      </li>
      <ul>
        <li>
          <Link href="/todo-list-with-useState">Todo list example (with useState)</Link>
        </li>
        <li>
          <Link href="/todo-list-with-useImmer">Todo list example (with useImmer)</Link>
        </li>
        <li>
          <Link href="/debounced-button">Debounced button example</Link>
        </li>
      </ul>
    </nav>
  )
}
