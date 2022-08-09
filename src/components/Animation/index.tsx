import { Vector2 } from "../../assets/img"
import { motion, Variants, AnimatePresence, AnimatePresenceProps } from 'framer-motion'
import { Children, ReactNode } from 'react'
export const VectorBackground = () => {
    return (
        <>
            <Vector2 index={2} top={10} left={'0%'} rotate={0} color={'white'} />
        </>
    )
}

interface Prop {
    img?: any
    height?: number | string
    width?: number | string
    children?: ReactNode
    y?: number
    yA?: number
    rotate?: number
    x?: number | string
    xA?: number | string
    index?: number
}

export const AppearEffect = (prop: Prop) => {
    const { img, height, width, children, index, y, yA, rotate, x, xA } = prop
    const cardVariants: Variants = {
        offscreen: {
            y: y,
            x: x,
            rotate: 0
        },
        onscreen: {
            y: yA,
            rotate: rotate,
            x: xA,

            transition: {
                type: "spring",
                bounce: .4,
                duration: 0.6
            }
        }
    };
    return (

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
        >
            <motion.div style={{ zIndex: index }} variants={cardVariants}>{children}</motion.div>



        </motion.div>

    )
}