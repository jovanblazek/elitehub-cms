import { Grid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { COLOR_INTENT } from 'theme'
import { NAVLINKS } from './constants'
import { NavLink } from './NavLink'

const ANIMATION_DURATION = 0.3
const ANIMATION_VARIANT = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible',
}

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
`

interface Props {
  isOpen: boolean
}

export const MobileMenu = ({ isOpen }: Props) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <Wrapper
        initial={ANIMATION_VARIANT.HIDDEN}
        animate={ANIMATION_VARIANT.VISIBLE}
        exit={ANIMATION_VARIANT.HIDDEN}
        variants={{
          [ANIMATION_VARIANT.HIDDEN]: { opacity: 0, height: 0 },
          [ANIMATION_VARIANT.VISIBLE]: { opacity: 1, height: 'auto' },
        }}
        transition={{
          duration: ANIMATION_DURATION,
        }}
      >
        <Grid
          backgroundColor={COLOR_INTENT.NAVBAR.MOBILE_BACKGROUND}
          px="10"
          py="8"
          gap="8"
          textAlign="end"
        >
          {NAVLINKS.map(({ href, text }) => (
            <NavLink href={href} text={text} />
          ))}
        </Grid>
      </Wrapper>
    )}
  </AnimatePresence>
)
