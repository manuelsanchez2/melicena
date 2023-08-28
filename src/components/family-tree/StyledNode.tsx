export const StyledNode = ({
  children,
  onClick,
  selected,
}: {
  children: React.ReactNode;
  onClick?: Function;
  selected?: boolean;
}) => {
  return (
    <div
      onClick={() => onClick()}
      style={{
        padding: '5px',
        borderRadius: '8px',
        display: 'inline-block',
        border: selected ? '2px solid red' : '2px solid black',
        cursor: 'pointer',
        fontSize: '12px',
        minWidth: '180px',
      }}
    >
      {children}
    </div>
  );
};
