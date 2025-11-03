const LoadingRotator = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-48 rounded-lg border border-border bg-card animate-pulse" />
      ))}
    </div>

  )
}
export default LoadingRotator;
