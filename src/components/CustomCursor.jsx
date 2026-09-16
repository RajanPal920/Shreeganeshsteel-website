import React, { useRef } from "react";

/**
 * Magnetic wrapper for CTA buttons / arrow buttons.
 * Moves element slightly toward the cursor.
 */
export default function Magnetic({
  children,
  strength = 0.28,
  as: Tag = "div",
  style = {},
  ...rest
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnetic
      style={{
        display: "inline-block",
        transition: "transform 260ms cubic-bezier(0.22,1,0.36,1)",
        willChange: "transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
