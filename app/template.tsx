'use client'

import MotionDiv from '@/app/ui/MotionDiv'

export default function Template({children}:{children: React.ReactNode}) {
    return (
        <MotionDiv
            initial={{ y: -1, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} 
            transition={{ ease: 'easeInOut', duration: 0.75 }}>
            {children}
        </MotionDiv>
    )
}