import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

// Add propTypes validation for icon, label, and children
DataItem.propTypes = {
  icon: PropTypes.element.isRequired, // 'icon' should be a React element (like an SVG)
  label: PropTypes.string.isRequired, // 'label' should be a string
  children: PropTypes.node.isRequired, // 'children' can be anything that React can render (node)
};

export default DataItem;
