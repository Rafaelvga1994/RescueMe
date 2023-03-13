import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 8px;

  label {
    font-size: 1.2rem;
    font-weight: 600;
  }

  Input {
    height: 35px;
    border-radius: 6px;
  }

  p {
    color: var(--color-error);
    font-size: 1rem;
  }
`;
