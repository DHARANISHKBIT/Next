export default function page() {
  return (
   <>
    <main className="container mx-auto px-4 py-6">
    <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
    <form className="w-full max-w-lg">
        <div className="flex items-center mb-4">
            <label className="w-1/4">Name:</label>
            <input type="text" id="name" className="border rounded px-2 py-1 w-3/4"/>
        </div>
        <div className="flex items-center mb-4">
            <label  className="w-1/4">Email:</label>
            <input type="email" id="email" className="border rounded px-2 py-1 w-3/4"/>
        </div>
        <div className="flex items-center mb-4">
            <label className="w-1/4">Message:</label>
            <textarea id="message" className="border rounded px-2 py-1 w-3/4" ></textarea>
        </div>
        {/* <button>submit</button> */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
</main>
   </>
  )
}
