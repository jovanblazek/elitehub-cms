import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { COLOR_INTENT } from 'theme'
import { useMedia } from 'utils/useMedia'

const ANIMATION_DURATION = 0.2
const ANIMATION_VARIANT = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible',
}

const AnimationWrapper = styled(motion.div)`
  position: relative;
`

const Underline = styled(motion.div)`
  position: absolute;
  border-bottom: 1px solid ${COLOR_INTENT.NAVLINK.HOVER};
  width: 100%;
`

interface Props {
  text: string
  href: string
}

export const NavLink = ({ text, href }: Props) => {
  const { isDesktop } = useMedia()
  return (
    <Link key={text} href={href}>
      <AnimationWrapper whileHover={ANIMATION_VARIANT.VISIBLE} initial={ANIMATION_VARIANT.HIDDEN}>
        <Text
          fontWeight="medium"
          cursor="pointer"
          transitionDuration={`${ANIMATION_DURATION}s`}
          _hover={{
            color: COLOR_INTENT.NAVLINK.HOVER,
          }}
        >
          {text}
        </Text>
        {isDesktop && (
          <Underline
            variants={{
              [ANIMATION_VARIANT.HIDDEN]: { opacity: 0, bottom: '-2px' },
              [ANIMATION_VARIANT.VISIBLE]: { opacity: 1, bottom: '0px' },
            }}
            transition={{
              duration: ANIMATION_DURATION,
            }}
          />
        )}
      </AnimationWrapper>
    </Link>
  )
}
