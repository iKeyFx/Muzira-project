import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.75rem;
  color: var(--color-white);
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: var(--color-black);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  img {
    width: 24px;
    height: 24px;
    transition: all 0.2s ease;
    filter: brightness(0) invert(1);
  }

  span {
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-black);
    background-color: rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }

    img {
      filter: brightness(0);
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 0.75rem;

    span {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      transform: translateX(-1rem);
    }

    img {
      margin: 0;
    }

    &::before {
      width: 100%;
      height: 4px;
      top: auto;
      bottom: 0;
    }
  }
`;

function NavItem({ to, icon, text }) {
  return (
    <li>
      <StyledNavLink to={to}>
        <img src={icon} alt={text} />
        <span>{text}</span>
      </StyledNavLink>
    </li>
  );
}

export default NavItem;
