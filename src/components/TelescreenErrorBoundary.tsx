import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertOctagon, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class TelescreenErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Telescreen Uncaught Error:', error, errorInfo)
  }

  private handleReload = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020703] text-emerald-400 font-mono flex items-center justify-center p-6 select-none">
          <div className="max-w-lg w-full border-4 border-rose-600 bg-black p-6 rounded-xl text-center space-y-4 shadow-[0_0_50px_rgba(225,29,72,0.4)]">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-rose-600 flex items-center justify-center text-rose-500 bg-rose-950/40">
              <AlertOctagon className="w-8 h-8 animate-pulse" />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-rose-400 tracking-wider uppercase">
              TELESCREEN MALFUNCTION DETECTED
            </h1>

            <p className="text-xs text-rose-300 leading-relaxed">
              Technical interruption in the Airstrip One broadcast grid. The Thought Police have been notified of this anomaly.
            </p>

            {this.state.error && (
              <div className="p-3 bg-rose-950/40 border border-rose-900 rounded text-[11px] text-rose-400 font-mono text-left overflow-x-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <button
              onClick={this.handleReload}
              className="px-5 py-2.5 rounded bg-rose-600 hover:bg-rose-500 text-black font-black text-xs uppercase flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reboot Telescreen Receiver</span>
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
