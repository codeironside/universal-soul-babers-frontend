
const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'John Doe',
    title: 'Back-end Developer',
    department: 'Development',
    email: 'john.doe@example.com',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'UX Designer',
    department: 'Design',
    email: 'jane.smith@example.com',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Johnson',
    title: 'Product Manager',
    department: 'Product Management',
    email: 'michael.johnson@example.com',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Emily Davis',
    title: 'Marketing Specialist',
    department: 'Marketing',
    email: 'emily.davis@example.com',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'David Brown',
    title: 'Data Analyst',
    department: 'Analytics',
    email: 'david.brown@example.com',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Amanda Wilson',
    title: 'Graphic Designer',
    department: 'Design',
    email: 'amanda.wilson@example.com',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    name: 'Christopher Lee',
    title: 'Quality Assurance Engineer',
    department: 'Quality Assurance',
    email: 'christopher.lee@example.com',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    name: 'Olivia Taylor',
    title: 'Content Writer',
    department: 'Content',
    email: 'olivia.taylor@example.com',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    name: 'Matthew Miller',
    title: 'Technical Support Specialist',
    department: 'Support',
    email: 'matthew.miller@example.com',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
]


export default function () {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Barbers</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the barbers in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2 sm:w-auto"
          >
            Add barber
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{person.name}</div>
                            <div className="text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person.title}</div>
                        <div className="text-gray-500">{person.department}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
