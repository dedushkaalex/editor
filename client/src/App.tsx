import { OutputPanel } from '@/features/CodeEditor/OutputPanel'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared/ui/resizable'
import { EditorPanel } from '@/widgets/EditorPanel/EditorPanel'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section className="flex gap-3 h-dvh p-4">
        <ResizablePanelGroup direction="horizontal" className="w-1/2  rounded-2xl p-2 overflow-hidden gap-2">
          <ResizablePanel minSize={25}>Задачи</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            minSize={25}
            className="w-1/2 border border-accent-foreground/25 rounded-2xl p-2 overflow-hidden"
          >
            <ResizablePanelGroup direction="vertical" className="gap-2">
              <ResizablePanel minSize={25}>
                <EditorPanel />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel minSize={25} defaultSize={10}>
                <OutputPanel />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  )
}

export default App
