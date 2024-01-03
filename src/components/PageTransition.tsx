import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useRouter } from 'next/router';

type PageTransitionProps = HTMLMotionProps<'div'> & { path: string, direction: 'left' | 'right' }
type PageTransitionRef = ForwardedRef<HTMLDivElement>

function PageTransition({ children, direction, path, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	const theRight = { x: '100%', opacity: 0 };
	const theCenter = { x: 0, opacity: 1 };
	const theLeft = { x: '-100%', opacity: 0 };

	const transition = { duration: 0.6, ease: 'easeInOut' };

	return (
		<motion.div
			ref={ref}
			initial={path === "/" || path === "/contact" ? (path === "/" ? theLeft : theRight) : (direction === 'left' ? theLeft : theRight)}
			animate={theCenter}
			exit={path === "/" || path === "/contact" ? (path === "/" ? theLeft : theRight) : (direction === 'left' ? theRight : theLeft)}
			transition={transition}
			{...rest}
			style={{ width: 'calc(100% - 4rem)', height: 'calc(100% - 4rem)', position: 'absolute', top: "2rem", left: "2rem" }}
			key={path}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition);