import styled from 'styled-components'

import { spacing, colors } from '../../tokens'

import Input from '../atoms/input'
import { Text } from '../atoms/typography'

const FormLabel = styled(Text)`
  display: inline-block;
  box-sizing: border-box;
  padding-right: ${spacing.small};
  text-align: right;
`

const FormField = styled.div`
  margin: ${spacing.small} 0;
`

const HelperText = styled.div`
  font-size: 13px;
  color: ${colors.grayMedium};
`

const Error = styled.div`
  font-size: 13px;
  color: ${colors.orange};
`

const Form = styled.form`
  ${FormLabel} {
    width: 30%;
  }
  ${Input} {
    width: 70%;
  }
  ${HelperText}, ${Error} {
    margin: ${spacing.xsmall} 0 ${spacing.xsmall} 30%;
  }
`

export { Form, FormField, FormLabel, HelperText, Error }