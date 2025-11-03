import { FileText } from "lucide-react"

export default function EmptyState() {
  return (
    <div className="rounded-lg border border-dashed border-border bg-card/50 px-6 py-16 text-center">
      <div className="flex justify-center mb-4">
        <div className="rounded-full bg-primary/10 p-4">
          <FileText className="h-8 w-8 text-primary" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">Start Searching</h3>
      <p className="text-muted-foreground max-w-sm mx-auto">
        Enter a query above to search through our legal document database. Get instant summaries and relevant excerpts.
      </p>
    </div>
  )
}
