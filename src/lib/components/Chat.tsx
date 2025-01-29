'use client'

import { useState } from 'react'
import useSWRMutation from 'swr/mutation'

export default function Chat() {
  const fetchChat = (url: string, { arg }: { arg: string }) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: arg }),
    }).then((res) => res.json())

  const { trigger, data, error, isMutating } = useSWRMutation(
    '/api/chat',
    fetchChat
  )
  const [inputText, setInputText] = useState('')

  if (isMutating) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div className="p-3 my-2 rounded-lg bg-white text-gray-700 w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          trigger(inputText)
        }}
      >
        <textarea
          name=""
          id=""
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          cols={5}
          placeholder="Enter your text here..."
          // className="py-1 px-2 border-2 rounded-md w-full"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="py-1 px-2 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded-md"
        >
          Generate
        </button>

        <div>
          {data && (
            <div className="p-3 my-2 rounded-lg bg-white  text-gray-700 w-full">
              {/* <p className="text-xs opacity-60">{data.message.role}</p> */}
              <p>{data.message}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
