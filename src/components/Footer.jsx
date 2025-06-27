export default function Footer() {
  return (
    <footer className="bg-amber-50 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
        
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Tasker. All rights reserved.</p>
        
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="/" className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              Contact
            </a>
          </li>
          <li>
            <a href="/task" className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              Tasks
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}
