export default function ContactUs() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-lg mb-4 max-w-xl text-center">
        We'd love to hear from you! If you have any questions, suggestions, or
        feedback, feel free to reach out to us at:
      </p>
      <div className="text-lg">
        📧 Email: <a href="mailto:support@taskerapp.com" className="text-blue-500 hover:underline">support@taskerapp.com</a>
        <br />
        📞 Phone: <span className="text-gray-700">+91-9998887776</span>
      </div>
    </div>
  );
}
