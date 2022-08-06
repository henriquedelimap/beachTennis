import { Vector2 } from "../../assets/img"
import { motion, Variants } from 'framer-motion'
import {ReactNode} from 'react'
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
    isImg: boolean
    children?:  ReactNode
}
export const AppearEffect = (prop: Prop) => {
    const {img, height, width, isImg, children} =prop
    const cardVariants: Variants = {
        offscreen: {
            y: 200,
            opacity: 0
        },
        onscreen: {
            y: -16,
            rotate: -16,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6
            }
        }
    };
    return (

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            style={{overflow: 'hidden'}}
        >
            {/* <motion.img
                variants={cardVariants}
                style={{ height: '10rem' }}
                src={img} /> */}

             <motion.div  variants={cardVariants}>{children}</motion.div>

        </motion.div>

    )
}