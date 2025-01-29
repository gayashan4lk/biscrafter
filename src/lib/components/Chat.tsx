export default function Chat(){
	return (
		<div className='p-3 my-2 rounded-lg bg-white shadow-sm text-gray-700 w-full'>
		<form action="" className="space-y-4">
          <textarea 
            name="" 
            id="" 
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            cols={5}
            placeholder="Enter your text here..."
          ></textarea>
          <button 
            type="submit" 
            className="py-1 px-2 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded-md"
          >
            Generate
          </button>
        </form>
				</div>
	)
}