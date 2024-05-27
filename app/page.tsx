import { TypewriterEffect } from "./components/ui/typewriter-effect";

export default function Home() {
  return (
    <main>
      <TypewriterEffect
        words={[
          {
            text: "Hello",
          },
          {
            text: "There",
          },
          {
            text: "I'm",
          },
          // {
          //   text: "with",
          // },
          {
            text: "Darshan.",
            className: "text-blue-500 dark:text-blue-500",
          },
        ]}
      />
    </main>
  );
}
