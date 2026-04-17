# @vibestartup/vse

declarative video/timeline primitives.

```tsx
import { Studio, Timeline, Track, Clip, Effect } from '@vibestartup/vse'

export default function MyEdit() {
  return (
    <Studio kind="vse">
      <Timeline fps={30} widthPx={1920} heightPx={1080}>
        <Track name="v1" kind="video">
          <Clip ref="intro" startFrame={0} durationFrames={90} />
        </Track>
      </Timeline>
    </Studio>
  )
}
```

primitives: `Timeline`, `Track`, `Clip`, `Effect`, `Transition`, `Keyframe`, `NodeGraph`, `Node`, `Wire`.

MIT.
