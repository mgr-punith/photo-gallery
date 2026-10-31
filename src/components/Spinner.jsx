function Spinner() {
  return (
    <div role="status" className="flex justify-center py-20">
      <span className="h-8 w-8 animate-spin rounded-full border-4 border-stone-200 border-t-stone-700" />
      <span className="sr-only">Loading photos</span>
    </div>
  )
}

export default Spinner
