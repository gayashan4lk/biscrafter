import Image from "next/image";
import Chat from "@/lib/components/Chat";
import Publish from "@/lib/components/Publish";
export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">BISCRAFTER</h1>
      <h5 className="text-lg mb-2 text-center">
        Your Digital Marketing Copilot
      </h5>
      <Chat />
      <Publish />
      <h5 className="text-center text-gray-500">Powered by BISTEC AI</h5>
    </div>
  );
}
