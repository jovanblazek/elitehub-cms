import { Text, TextProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { PrismicNextLink } from '@prismicio/next'
import type { KeyTextField, LinkField } from '@prismicio/types'
import { motion } from 'framer-motion'
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

interface Props extends TextProps {
  nameField: KeyTextField
  linkField: LinkField
}

export const NavLink = ({ nameField, linkField, ...rest }: Props) => {
  const { isDesktop } = useMedia()
  return (
    <PrismicNextLink field={linkField}>
      <AnimationWrapper whileHover={ANIMATION_VARIANT.VISIBLE} initial={ANIMATION_VARIANT.HIDDEN}>
        <Text
          fontWeight="medium"
          cursor="pointer"
          transitionDuration={`${ANIMATION_DURATION}s`}
          color={COLOR_INTENT.NAVLINK.TEXT}
          _hover={{
            color: COLOR_INTENT.NAVLINK.HOVER,
          }}
          {...rest}
        >
          {nameField}
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
    </PrismicNextLink>
  )
}
