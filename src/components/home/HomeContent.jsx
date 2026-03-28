import { useState } from "react";
import TypedText from "../ui/Typed";
import Header from "../layout/Header"

const typedStrings = [
  "ReactJS + Typed.js 打字效果",
  "Welcome to iGEM Team 2026",
];

function HomeContent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section id="center">
        <div>
          <h1>
            <TypedText
              strings={typedStrings}
              typeSpeed={50}
              loop={false}
              showCursor={false}
            />
          </h1>
        </div>
      </section>

    </>
  );
}

export default HomeContent;
