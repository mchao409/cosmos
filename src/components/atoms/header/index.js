import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts } from '../../../tokens'

const StyledHeading = styled.h1`
  margin: 0; /* reset browser default */
  color: ${colors.text.default};
  font-weight: ${fonts.weight.normal};
`

const Heading = []

Heading[1] = StyledHeading.withComponent('h1').extend`
  font-size: 36px;
`

Heading[2] = StyledHeading.withComponent('h2').extend`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`

Heading[3] = StyledHeading.withComponent('h3').extend`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

Heading[4] = StyledHeading.withComponent('h4').extend`
  font-size: 24px;
`

Heading[5] = StyledHeading.withComponent('h5').extend`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`

const Header = props => {
  const Component = Heading[props.size]
  return <Component {...props}>{props.children}</Component>
}

Header.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  children: PropTypes.string
}

Header.defaultProps = {
  size: 1,
  children: null
}

export default Header
