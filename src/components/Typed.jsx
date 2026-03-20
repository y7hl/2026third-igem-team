import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1200,
  loop = true,
  className,
  cursorChar = "|", // 新增：光标字符，默认 |
  showCursor = true, // 新增：是否显示光标，默认 true
}) {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current || !Array.isArray(strings) || strings.length === 0) {
      return undefined;
    }

    if (!showCursor && el.current.parentNode) {
      el.current.parentNode
        .querySelectorAll(".typed-cursor")
        .forEach((cursorNode) => cursorNode.remove());
    }

    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      cursorChar, // 添加光标字符配置
      showCursor, // 添加是否显示光标配置
    });

    return () => {
      typed.destroy();

      if (!showCursor && el.current?.parentNode) {
        el.current.parentNode
          .querySelectorAll(".typed-cursor")
          .forEach((cursorNode) => cursorNode.remove());
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, cursorChar, showCursor]);

  return (
    <span
      ref={el}
      className={className}
      style={{ whiteSpace: "pre-wrap", lineHeight: "30px" }}
    />
  );
}

export default TypedText;
