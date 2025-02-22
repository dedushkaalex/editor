import { RunningCodeSkeleton } from '@/features/CodeEditor/RunningCodeSkeleton'
import { useCodeEditorStore } from '@/features/CodeEditor/store/useCodeEditorStore'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { AlertTriangle, CheckCircle, Copy, Terminal } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { match, P } from 'ts-pattern'

export const OutputPanel = ({ className }: { className?: string }) => {
  const { output, error, isRunning } = useCodeEditorStore()
  const [isCopied, setIsCopied] = useState(false)
  const timeOutId = useRef<ReturnType<typeof setTimeout>>(null)

  const hasContent = error ?? output

  const handleCopy = async () => {
    if (!hasContent) return

    await navigator.clipboard.writeText(error || output)
    setIsCopied(true)

    timeOutId.current = setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeOutId.current) {
        clearTimeout(timeOutId.current)
      }
    }
  }, [])

  return (
    <div className={cn('relative dark:bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/25 bg-gray-600/25', className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/25">
            <Terminal className="size-4 text-blue-400" />
          </div>
          <span>Output</span>
        </div>
        {hasContent && (
          <Button variant={'ghost'} onClick={handleCopy}>
            {isCopied ? (
              <>
                <CheckCircle className="size-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                Copy
              </>
            )}
          </Button>
        )}
      </div>

      <div className="relative">
        <div className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] rounded-xl p-4 h-[600px] overflow-auto font-mono text-sm">
          {match({ isRunning, error, output })
            .with({ isRunning: true }, () => <RunningCodeSkeleton />)
            .with({ error: null, output: P.when((o) => o !== '') }, (data) => (
              <code>
                <pre>{data.output}</pre>
              </code>
            ))
            .with({ error: P.nonNullable.select() }, (error) => (
              <div className="flex items-center gap-3 bg-destructive-foreground dark:bg-destructive">
                <AlertTriangle className="size-5 shrink-0 mt-1" />
                <div className="space-y-1">
                  <div className="font-medium">Execution Error</div>
                  <pre className="whitespace-pre-wrap bg-destructive dark:bg-destructive">{error}</pre>
                </div>
              </div>
            ))
            .otherwise(() => (
              <div>No output</div>
            ))}
        </div>
      </div>
    </div>
  )
}
