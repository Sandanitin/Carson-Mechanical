export default function BasicModal({ open, title = 'Notice', description = '', onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} aria-hidden="true"></div>
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 id="modal-title" className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary">OK</button>
        </div>
      </div>
    </div>
  )
}


