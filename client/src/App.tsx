import { EditorPanel } from '@/widgets/EditorPanel/EditorPanel'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section className="flex gap-3 h-dvh p-4">
        <section className="w-1/2 border border-accent-foreground/25 rounded-2xl p-2 overflow-hidden">Ревью</section>
        <section className="w-1/2 border border-accent-foreground/25 rounded-2xl p-2 overflow-hidden">
          <EditorPanel />
        </section>
      </section>
    </div>
  )
}

export default App
