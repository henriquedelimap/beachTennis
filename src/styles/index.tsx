import styled from "@emotion/styled";
import {MotionValue} from 'framer-motion'

export const Overflow = styled('div')(({})=>({
    overflowX: 'hidden',
    position: 'relative'
}))

export const Fundo = styled('div')(({top, left, rotate, right}:{top?: number, left?: number, rotate?: number, right?: any})=>({
    position: 'absolute',
    top: top,
    left: left,
    right: right,
    transform: `translateX(${rotate})`,
}))

export const Sticky = styled('div')(({bottom, top, index, right}: {bottom?: number, top?: number | string, index: number, right?: number | string})=>({
    position: 'sticky',
    top: top,
    bottom: bottom,
    left: 0,
    right: right,
    background: 'transparent',
    zIndex: index
}))