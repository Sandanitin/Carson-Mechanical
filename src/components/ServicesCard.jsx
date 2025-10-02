export default function ServicesCard({ title, description, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 flex items-center justify-center rounded-md bg-blue-50 text-primary">
          {icon || <span aria-hidden>⚙️</span>}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{title}</h3>
          <p className="mt-1 text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}


