import { ReactNode } from "react";

interface GridProps {
  className?: string;
  children: ReactNode;
  columns?: number;
  gutter?: string;
  rowHeight?: string; // e.g. "200px"; when set, all implicit rows share the same height
  columnWidth?: string; // e.g. "250px"; when set, columns auto-fill to at least this width
}

export function Grid({ className = "", children, columns = 12, gutter = "1.25rem", rowHeight, columnWidth }: GridProps) {
  const templateColumns = columnWidth
    ? `repeat(auto-fill, minmax(${columnWidth}, 1fr))`
    : `repeat(${columns}, minmax(0, 1fr))`;

  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: templateColumns,
    gap: gutter,
    ...(rowHeight ? { gridAutoRows: rowHeight } : {}),
  } as const;
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}

interface ColProps {
  className?: string;
  children: ReactNode;
  span?: number; // columns to span on desktop
  start?: number; // grid column start (1-based)
  rowSpan?: number; // optional rows to span
  rowStart?: number; // optional grid row start (1-based)
}

export function Col({ className = "", children, span = 12, start, rowSpan, rowStart }: ColProps) {
  const style: React.CSSProperties = {
    gridColumn: `${start ?? "auto"} / span ${span}`,
    ...(rowSpan !== undefined || rowStart !== undefined
      ? { gridRow: `${rowStart ?? "auto"} / ${rowSpan !== undefined ? `span ${rowSpan}` : "auto"}` }
      : {}),
  } as const;
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}

export default Grid;


