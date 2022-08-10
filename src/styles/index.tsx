import styled from "@emotion/styled";
import {MotionValue} from 'framer-motion'

export const Overflow = styled('div')(({})=>({
    overflow: 'hidden'
}))

export const Fundo = styled('div')(({top, left, rotate, right}:{top?: number, left?: number, rotate?: number, right?: any})=>({
    position: 'absolute',
    top: top,
    left: left,
    right: right,
    transform: `translateX(${rotate})`,
}))

export const Sticky = styled('div')(({bottom, top, index}: {bottom?: number, top?: number, index: number})=>({
    position: 'sticky',
    top: top,
    bottom: bottom,
    left: 0,
    background: '#ffffff',
    zIndex: index
}))