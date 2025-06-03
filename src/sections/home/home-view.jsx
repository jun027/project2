import { CoverView } from './components/cover'
import { AnyangView } from './components/anyang'
import { InfiniteView } from './components/infinite'
import { InformationView } from './components/information'
import { AccumulationView } from './components/accumulation'
import { CaseView } from './components/case'
// eslint-disable-next-line no-unused-vars
import { VideoView } from './components/video'

export default function HomeView() {
  return (
    <div>
      <CoverView />
      <AnyangView />
      <InfiniteView />
      <InformationView />
      <AccumulationView />
      <CaseView />
      {/* <VideoView /> */}
    </div>
  )
}
