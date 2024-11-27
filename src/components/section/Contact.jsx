export default function ContactSection() {
  return (
    <div id="contact">
      <div className="flex items-center justify-center md:min-h-screen">
        <div
          className="relative w-full max-w-5xl md:p-8 p-4 bg-cover bg-center md:rounded-3xl shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-black opacity-50 md:rounded-3xl"></div>
          <div className="relative z-0 flex flex-col md:flex-row items-start justify-between p-8">
            <div className="text-white md:w-2/5">
              <h2 className="text-sm font-semibold mb-2">READY TO ASSIST</h2>
              <h1 className="text-4xl font-bold mb-4">Join our growing list of satisfied clients today!</h1>
              <p className="text-sm">Over 15 years in software development, we&apos;ve had the privilege of collaborating with a diverse array of esteemed companies, ranging from industry leaders to innovative startups.</p>
            </div>
            <div className="md:w-2/5 mt-8 md:mt-0">
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <input type="text" placeholder="Name" className="w-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none" />
                  <input type="email" placeholder="Email" className="w-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none" />
                </div>
                <div className="flex space-x-4">
                  <input type="text" placeholder="Phone Number" className="w-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none" />
                  <input type="text" placeholder="Company" className="w-1/2 p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none" />
                </div>
                <textarea placeholder="Message" className="w-full p-3 bg-gray-700 bg-opacity-50 text-white rounded-md focus:outline-none h-32"></textarea>
                <button type="submit" className="w-full p-3 bg-red-600 text-white rounded-md">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
