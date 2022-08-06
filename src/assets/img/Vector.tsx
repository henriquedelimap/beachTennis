import { motion, useScroll } from 'framer-motion'
interface Prop {
    top?: number | string
    right?: number | string
    left?: number | string
    color?: string | string
    rotate?: number
}

export const Vector = (prop: Prop) => {
    const { top, right, left, color, rotate } = prop
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
    const { top, right, left, color, rotate } = prop
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
        <div style={{ position: 'absolute', top: top, left: left, right: right, transform: `rotate(${rotate}deg)` }}>

            <motion.svg width="699" initial='hidden'
                animate='visible' height="602" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">

                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M357.586 8.54111C409.994 3.79463 472.236 -4.77888 512.038 29.6429C554.137 66.0505 534.445 138.736 563.221 186.378C587.236 226.138 647.43 236.972 663.572 280.527C679.653 323.917 652.707 370.698 648.615 416.791C643.921 469.658 675.704 536.736 637.548 573.628C597.197 612.642 527.633 581.281 471.871 587.681C433.068 592.135 396.542 602.924 357.586 605.759C316.313 608.764 273.597 619.843 234.998 604.924C195.819 589.78 167.135 555.949 141.884 522.383C117.009 489.317 109.144 447.981 89.5252 411.549C63.2404 362.74 -4.14357 324.621 6.03889 270.128C16.0394 216.608 96.075 211.084 134.239 172.253C167.787 138.118 177.443 84.7452 216.044 56.4508C256.728 26.6299 307.349 13.091 357.586 8.54111Z" stroke={color} stroke-width="100" style={{ pathLength: scrollYProgress, rotate: scrollYProgress, transformOrigin: 'top center' }} />
            </motion.svg>
        </div>
    )
}
