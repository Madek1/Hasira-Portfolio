import React from 'react'
import { SectionLink } from 'react-scroll-section'
import styled from 'styled-components'

const Menus = styled.ul`
  flex-direction: column;
  z-index: 999;
`

const Div = styled.div`
  position: relative;
  height: 42px;
  opacity: 1;
  border-right: 4px solid
    ${props => (props.selected ? '#5bda7f' : 'transparent')};
  border-radius: 0 4px 4px 0;
`

const Item = styled.li`
  cursor: pointer;
  transition: all 0.25s;
  margin: 12px 0 12px 0;
  font-weight: bold;
  user-select: none;
  line-height: 42px;
  font-size: calc(10px + 2vmin);
  color: ${props => (props.selected ? 'FFFFFF' : '#FFFFFFAD')};
  &:hover ${Div} {
    opacity: 0.7;
    top: 4px;
    height: 30px;
    border-right: 4px solid #5bda7f;
  }
`

const MenuItem = ({ section, children }) => (
  <SectionLink id="nav" section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        <Div selected={link.isSelected} />
        {children}
      </Item>
    )}
  </SectionLink>
)

export { MenuItem as Items, Menus }

export default styled
