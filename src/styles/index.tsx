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

export const Sticky = styled('div')(({})=>({
    position: 'sticky',
    top: 58.04,
    left: 0,
    background: '#ffffffaf',
    backdropFilter: 'blur(8px)',
    borderTop: '2px solid transparent',
    zIndex: 200
}))