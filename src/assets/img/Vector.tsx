import { motion, useScroll } from 'framer-motion'
interface Prop {
    top?: number | string
    right?: number | string
    left?: number | string
    color?: string | string
    rotate?: number
    index?: number
}

export const Vector = (prop: Prop) => {
    const { top, right, left, color, rotate, index } = prop
    const { scrollX, scrollYProgress, scrollY } = useScroll()
    const draw = {
        hidden: {
            strokeWidth: 3,
            pathLength: 1,
            rotate: 0,
            scaleY: 0,
            opacity: 1
        },
        visible: {
            opacity: 1,
            scaleY: scrollYProgress,
            transition: {
            }
        }
    };
    return (
        <div style={{ zIndex: '', position: 'absolute', top: top, left: left, right: right, transform: `rotate(${rotate}deg)` }}>

            <motion.svg width="699" initial='hidden'
                animate='visible' height="602" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M333.944 28.312C378.19 20.0001 426.036 -8.0533 466.316 12.0528C506.74 32.2302 499.038 98.5309 533.396 127.868C578.778 166.619 676.144 147.693 692.411 205.108C708.199 260.83 622.413 295.381 595.369 346.594C575.863 383.532 582.092 431.39 555.783 463.836C529.515 496.231 488.627 512.519 449.382 526.636C412.319 539.968 372.016 533.539 333.944 543.636C282.249 557.346 237.613 604.635 184.703 596.828C133.311 589.246 84.9743 550.294 62.2993 503.556C39.4493 456.456 74.3022 399.858 64.2219 348.488C54.5441 299.17 7.12 262.077 5.05969 211.86C2.89075 158.996 9.26048 92.9803 52.4871 62.4713C99.6796 29.1631 166.194 64.6202 223.536 57.6608C261.819 53.0146 296.043 35.432 333.944 28.312Z" stroke={color} stroke-width="100" style={{ pathLength: scrollYProgress, rotate: scrollYProgress, transformOrigin: 'top center' }} />
            </motion.svg>

        </div>
    )
}
export const Vector2 = (prop: Prop) => {
    const { top, right, left, color, rotate, index } = prop
    const { scrollX, scrollYProgress, scrollY } = useScroll()

    const draw = {
        hidden: {
            strokeWidth: 3,
            pathLength: 1,
            rotate: 0,
            scaleY: 0,
            opacity: 1
        },
        visible: {
            opacity: 1,
            scaleY: scrollYProgress,
            transition: {
            }
        }
    };
    return (
        <div style={{zIndex: index, position: 'absolute', top: top, left: left, right: right, transform: `rotate(${rotate}deg)` }}>

            <motion.svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M0 15H536C571.346 15 60 43.6538 600 79V615"  stroke={color} stroke-width="110" style={{ pathLength: scrollYProgress, rotate: scrollYProgress, transformOrigin: 'top center'}}/>
            </motion.svg>

        </div>
    )
}
