export default function ({ children, extraClasses = '' }) {
  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow ${extraClasses}`}>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}
