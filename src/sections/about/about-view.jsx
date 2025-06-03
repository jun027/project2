import { FounderView } from './components/founder'
import { HistoryView } from './components/history'
import { PurposeView } from './components/purpose'
import { ServeView } from './components/serve'

export default function AboutView() {
  return (
    <div>
      <FounderView />
      <HistoryView />
      <PurposeView />
      <ServeView />
    </div>
  )
}