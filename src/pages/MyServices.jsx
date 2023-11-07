
const ServicesPage = () => {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">Your Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Service 1</h2>
                    <p className="text-gray-700 mb-4">
                        Description of Service 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="bg-primaryDark text-white px-4 py-2 rounded hover:bg-primaryColor">
                        Learn More
                    </button>
                </div>

                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Service 2</h2>
                    <p className="text-gray-700 mb-4">
                        Description of Service 2 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="bg-primaryDark text-white px-4 py-2 rounded hover:bg-primaryColor">
                        Learn More
                    </button>
                </div>

                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Service 3</h2>
                    <p className="text-gray-700 mb-4">
                        Description of Service 3 goes here. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="bg-primaryDark text-white px-4 py-2 rounded hover:bg-primaryColor">
                        Learn More
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ServicesPage;
