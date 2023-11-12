
const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 2,
    subject: 'Reprehenderit ut qui aut',
    sender: 'Brian Thompson',
    time: '2d ago',
    datetime: '2021-01-26T09:12',
    preview:
      'Soluta voluptates recusandae voluptas rerum doloribus cupiditate sit omnis. Necessitatibus enim eaque autem id dolore voluptatem. Beatae aliquam voluptas ea possimus quas nihil.',
  },
  {
    id: 3,
    subject: 'Cupiditate est omnis iste',
    sender: 'Julia Rodriguez',
    time: '3d ago',
    datetime: '2021-01-25T14:20',
    preview:
      'Autem aliquam ut quasi earum. Ut sunt quo ipsam ullam aut a. Nemo id dolorem qui voluptatem alias vel. Tempore aut exercitationem aperiam ratione repellendus porro.',
  },
]


export default function () {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-200">
        {messages.map((message) => (
          <li
            key={message.id}
            className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <a href="#" className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="truncate text-sm font-medium text-gray-900">{message.sender}</p>
                  <p className="truncate text-sm text-gray-500">{message.subject}</p>
                </a>
              </div>
              <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                {message.time}
              </time>
            </div>
            <div className="mt-1">
              <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href="#"
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </>
  )
}
