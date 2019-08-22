import React from 'react'
import { SectionLink } from 'react-scroll-section'
import styled from 'styled-components'

const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 11%;
  margin: 0;
  padding: 24px 24px 14px 14px;
  border-radius: 0 0 12px 12px;
  background-color: #151515;
  text-align: center;
  font-family: Qenalas-Bold, sans-serif;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  @media (max-width: 600px) {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    height: 48px;
    left: 0;
    padding: 24px 0 0 0;
  }
`

const Div = styled.div`
  position: relative;
  margin 0 auto;
  opacity: 1;
  border-top: 3px solid ${props =>
    props.selected ? '#5bda7f' : 'transparent'};
  border-radius: 3px 3px 0 0;
  top: 34px;
}
  @media (max-width: 600px) {
    top: 44px;
  }
`

const Item = styled.li`
  display: block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0 36px 0 0;
  font-weight: bold;
  user-select: none;
  color: ${props => (props.selected ? 'FFFFFF' : '#FFFFFFAD')};
  &:hover ${Div} {
    opacity: 0.7;
    border-top: 4px solid #5bda7f;
    width: 50%;
    margin 0 auto;
  }
  &:last-child {
    margin: 0 0 0 0;
  }
  @media (max-width: 600px) {
    flex: 1 1 100%;
    font-size: calc(8px + 2vmin);
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

export { MenuItem as Item, Menu }

export default styled
