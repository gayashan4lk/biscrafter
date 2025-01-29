import Chat from '@/lib/components/Chat'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">BISCRAFTER</h1>
      <h5 className="text-lg mb-2 text-center">
        Your Digital Marketing Copilot
      </h5>
      <Chat />
      <h5 className="my-1 pt-3 text-center text-gray-500 border-t-2 border-gray-300">
        Powered by BISTEC AI
      </h5>
    </div>
  )
}
