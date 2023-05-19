import styled from "@emotion/styled";
import * as o2design from "../../core.json";
interface TestButtonProps {
  content: string;
}

const StyledButton = styled.div`
  background-color: ${o2design.colors.indigo[300]};
`;

const TestButton = ({ content }: TestButtonProps) => {
  return (
    <StyledButton style={{ backgroundColor: "green" }}>
      <button>{content}</button>
    </StyledButton>
  );
};

export default TestButton;
