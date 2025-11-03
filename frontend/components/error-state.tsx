import { AlertCircle } from "lucide-react"

interface ErrorStateProps {
  message: string
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-6 py-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-destructive mb-1">Search Failed</h3>
          <p className="text-sm text-destructive/80">{message}</p>
        </div>
      </div>
    </div>
  )
}
