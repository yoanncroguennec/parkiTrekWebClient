interface Props {
  directions: readonly {
    key: string;
    label: string;
    x: number;
    y: number;
  }[];

  color: string;

  typography: {
    fontSize: number;
    fontWeight: number;
    fontFamily: string;
  };
}

export default function CompassDirections({ directions, color, typography }: Props) {
  return (
    <>
      {directions.map(({ key, label, x, y }) => (
        <text
          key={key}
          x={x}
          y={y}
          fill={color}
          fontSize={typography.fontSize}
          textAnchor="middle"
          fontWeight={typography.fontWeight}
          fontFamily={typography.fontFamily}
        >
          {label}
        </text>
      ))}
    </>
  );
}
