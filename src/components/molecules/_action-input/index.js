import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput, { StyledInput } from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { multiply } from '../../_helpers/pixel-calc'

/* TODO: width of button should be exported by button component */
const widthOfButton = '62px'

const Wrapper = styled.div`
  position: relative;
  ${StyledInput} {
    ${props => {
      if (!props.actions) return
      return `padding-right: ${multiply(widthOfButton, props.actions.length)}`
    }};
  }

  ${StyledButtonGroup} {
    position: absolute;
    right: 0;
    top: 2px;
  }
`

/**
 * Used when input can have actions attached
 */

const ActionInput = props => {
  if (props.actions) {
    return (
      <Wrapper actions={props.actions}>
        <TextInput {...props} />
        <ButtonGroup compressed>
          {props.actions.map((action, index) => (
            <Button
              key={index}
              link
              icon={action.icon}
              onClick={action.method}
              label={action.label}
            />
          ))}
        </ButtonGroup>
      </Wrapper>
    )
  } else {
    return <TextInput {...props} />
  }
}

ActionInput.propTypes = {
  ...TextInput.propTypes,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      method: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  )
}

ActionInput.defaultProps = {
  ...TextInput.defaultProps,
  actions: []
}

export default ActionInput
