import { Vector2 } from "../../assets/img"
import { motion, Variants, LazyMotion, m, domAnimation, useAnimation, useInView } from 'framer-motion'
import { Children, ReactElement, ReactNode, RefObject, useEffect, useRef } from 'react'
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




const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
};


export function LazyLoad({children, once}:{children?: ReactNode, once?: boolean}) {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref, { once: once || false });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "translateX(0px)" : !isInView ? "translateX(-200px)" : "translateX(0px)",
                    opacity: isInView ? 1 : !isInView ? 0.4 : 1,
                    transition: "all 0.16s cubic-bezier(0.17, 0.55, 0.55, 1) 0.16s"
                }}
            >
                {children}
            </span>
        </section>
    );
}
