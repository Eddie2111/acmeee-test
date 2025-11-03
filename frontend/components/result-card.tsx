import { useState } from "react"

import { ChevronDown } from "lucide-react"
import type { SearchResult } from "types/search"
import Badge from "./badge"

interface ResultCardProps {
  result: SearchResult
}

export default function ResultCard({ result }: ResultCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{result.title}</h3>
            <Badge color="primary">
              {result.category}
            </Badge>
          </div>
          <p className="text-muted-foreground">{result.excerpt}</p>

          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm text-muted-foreground">
              Source ID: <span className="font-semibold text-foreground">{result.source_id}%</span>
            </span>
            <span className="text-sm text-muted-foreground">{result.date}</span>
          </div>
        </div>

        <button onClick={() => setIsExpanded(!isExpanded)} className="rounded p-2 hover:bg-muted transition-colors">
          <ChevronDown
            className={`h-5 w-5 text-background transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 border-t border-border pt-4">
          <h4 className="font-semibold text-foreground mb-2">Summary</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{result.summary}</p>
        </div>
      )}
    </div>
  )
}
