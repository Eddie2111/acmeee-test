import { useState, useEffect, useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "components/header"
import SearchBar from "components/search-bar"
import ResultsPanel from "components/results-panel"
import { useSearchAPI } from "utils/request"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

  const {
    data: results = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      if (!debouncedQuery.trim() || debouncedQuery.trim().length < 2) return []
      const response = await useSearchAPI.getSearchResult(debouncedQuery);
      return response;
    },
    enabled: !!debouncedQuery.trim() && debouncedQuery.trim().length >= 2,
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (query.trim().length >= 2) {
      setHasSearched(true)
    }
    
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)
  }

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        <ResultsPanel
          results={results}
          isLoading={isLoading}
          error={error?.message || null}
          hasSearched={hasSearched}
        />
      </div>
    </main>
  )
}