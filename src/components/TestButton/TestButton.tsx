interface TestButtonProps {
  content: string;
}

const TestButton = ({ content }: TestButtonProps) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <button>{content}</button>
    </div>
  );
};

export default TestButton;
