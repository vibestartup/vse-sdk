import { createElement, type ReactNode } from 'react'
import { Op } from '@vibestartup/sdk-runtime'

export { Studio, useNumberParam, useStringParam, useBooleanParam, useParam, Ref, Link, Import, Code } from '@vibestartup/sdk-runtime'
export const VSE_KINDS = ['vse', 'comp', 'clip'] as const

export type TimelineProps = { fps?: number; widthPx?: number; heightPx?: number; sampleRate?: number; children?: ReactNode }
export function Timeline(p: TimelineProps) { return createElement(Op, { type: 'vse.timeline', props: { fps: p.fps ?? 30, widthPx: p.widthPx ?? 1920, heightPx: p.heightPx ?? 1080, sampleRate: p.sampleRate ?? 48000 } }, p.children) }

export type TrackProps = { name: string; kind: 'video' | 'audio' | 'subtitle' | 'node'; children?: ReactNode }
export function Track(p: TrackProps) { return createElement(Op, { type: 'vse.track', props: { name: p.name, kind: p.kind } }, p.children) }

export type ClipProps = { ref?: string; startFrame: number; durationFrames: number; inFrame?: number; effects?: ReactNode; children?: ReactNode }
export function Clip(p: ClipProps) { return createElement(Op, { type: 'vse.clip', props: { ref: p.ref, startFrame: p.startFrame, durationFrames: p.durationFrames, inFrame: p.inFrame ?? 0 } }, p.effects ?? p.children) }

export type EffectProps = { type: string; params?: Record<string, unknown>; children?: ReactNode }
export function Effect(p: EffectProps) { return createElement(Op, { type: 'vse.effect', props: { type: p.type, params: p.params ?? {} } }, p.children) }

export type TransitionProps = { type: 'cut' | 'crossfade' | 'wipe' | 'dip-to-black' | string; durationFrames?: number }
export function Transition(p: TransitionProps) { return createElement(Op, { type: 'vse.transition', props: { type: p.type, durationFrames: p.durationFrames ?? 12 } }) }

export type KeyframeProps = { property: string; frame: number; value: number | string | number[]; easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | string }
export function Keyframe(p: KeyframeProps) { return createElement(Op, { type: 'vse.keyframe', props: p }) }

export type NodeGraphProps = { children?: ReactNode }
export function NodeGraph(p: NodeGraphProps) { return createElement(Op, { type: 'vse.nodegraph', props: {} }, p.children) }

export type NodeProps = { id: string; kind: string; params?: Record<string, unknown> }
export function Node(p: NodeProps) { return createElement(Op, { type: 'vse.node', props: p }) }

export type WireProps = { from: string; fromPort: string; to: string; toPort: string }
export function Wire(p: WireProps) { return createElement(Op, { type: 'vse.wire', props: p }) }
