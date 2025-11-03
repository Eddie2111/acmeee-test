import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
  isLoading: boolean
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div className="mb-12 space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-balance">Search Legal Documents</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Find and summarize legal documents with AI-powered search
        </p>
      </div>
      
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search contracts, employment law, IP rights..."
          value={query}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full rounded-lg border border-input bg-background py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
        />
        {isLoading && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}
      </div>
    </div>
  )
}