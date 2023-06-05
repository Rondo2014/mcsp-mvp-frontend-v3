import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, } from 'framer-motion';



export const Reveal = ({ children = "fit-content" }) => {
    const ref = useRef();
    const isInView = useInView(ref, { triggerOnce: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className={`relative w-full overflow-hidden`}>
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.5}}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: { left: 0 },
                visible: { left: "100%" }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 0.5, ease: "easeIn"}}
         className='absolute bg-primary top-4 bottom-4 left-0 right-0 z-20'/>
        </div>
    );
};