
import ResultCard from "./result-card"
import EmptyState from "./empty-state"
import ErrorState from "./error-state"
import type { SearchResult } from "types/search"
import LoadingRotator from "./loader-animation"

interface IResultsPanelProps {
  results: SearchResult[]
  isLoading: boolean
  error: string | null
  hasSearched: boolean
}

export default function ResultsPanel({ results, isLoading, error, hasSearched }: IResultsPanelProps) {
  if (error) {
    return <ErrorState message={error} />
  }

  if (!hasSearched) {
    return <EmptyState />
  }

  if (isLoading) {
    return (
      <LoadingRotator />
    )
  }

  if (results.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card/50 px-6 py-12 text-center">
        <p className="text-muted-foreground">No documents found. Try a different search.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Found {results.length} document{results.length !== 1 ? "s" : ""}
        </h3>
      </div>
      <div className="grid gap-4">
        {results.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  )
}
