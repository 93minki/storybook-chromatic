import styled from "@emotion/styled";
import * as o2design from "../../core.json";
interface TestButtonProps {
  content: string;
}

const StyledButton = styled.div`
  background-color: ${o2design.colors.pink[100].value};
`;

const TestButton = ({ content }: TestButtonProps) => {
  return (
    <StyledButton>
      <button>{content}</button>
    </StyledButton>
  );
};

export default TestButton;
