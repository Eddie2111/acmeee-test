import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground"><Scale/></span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Legal Assistant</h1>
            <p className="text-sm text-muted-foreground">Document Search Portal</p>
          </div>
        </div>
      </div>
    </header>
  )
}
