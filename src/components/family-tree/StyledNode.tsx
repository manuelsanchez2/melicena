export const StyledNode = ({
  children,
  onClick,
  selected,
  id,
}: {
  children: React.ReactNode;
  onClick?: Function;
  selected?: boolean;
  id: number;
}) => {
  let idString = id.toString();
  let className = `level-${idString.length}`;

  return (
    <div
      className={className}
      onClick={() => onClick()}
      style={{
        padding: '5px',
        borderRadius: '8px',
        display: 'inline-block',
        border: selected ? '2px solid red' : '2px solid black',
        cursor: 'pointer',
        fontSize: '12px',
        minWidth: '180px',
        whiteSpace: 'pre',
        color: 'lightgray',
      }}
    >
      {children}
    </div>
  );
};
