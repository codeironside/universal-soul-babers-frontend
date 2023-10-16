
const NotFound = () => {
  return (
    <div className='bg-black min-h-screen flex items-center justify-center'>
      <div className='max-w-md p-8 bg-white rounded-lg shadow-lg text-center'>
        {/* Placeholder for SVG illustration */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='mx-auto w-16 h-16 text-gray-800'>
          {/* You can replace this with your custom SVG code or a URL */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
        <h1 className='text-4xl text-gray-800 font-semibold mb-4'>
          404 - Page Not Found
        </h1>
        <p className='text-gray-600 mb-6'>
          The page you are looking for does not exist.
        </p>
        <button
          className='bg-blue-500 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          onClick={() => {
            // You can implement a custom action here, such as returning to the homepage.
            // Example: history.push('/');
          }}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
