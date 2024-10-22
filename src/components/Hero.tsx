import { DATA, PRIMARY_COLOR } from "@/lib/data";
import { HeroIconCloud } from "./HeroIconCloud";
import BoxReveal from "./magicui/box-reveal";
import Highlighter from "react-highlight-words";

const Hero = () => {
  
  return (
    <section id="hero">
      <div className="w-full mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* left side */}
          <div className="flex flex-col flex-1 space-y-4">
            <BoxReveal boxColor={PRIMARY_COLOR} duration={0.5}>
              <h3 className="text-3xl text-primary">Hi, my name is</h3>
            </BoxReveal>

            <BoxReveal boxColor={PRIMARY_COLOR} duration={0.5}>
              <h1 className="text-5xl font-semibold">{DATA.name}</h1>
            </BoxReveal>

            <BoxReveal boxColor={PRIMARY_COLOR} duration={0.5}>
              <h2 className="text-4xl font-medium text-primary">
                Software Developer
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={PRIMARY_COLOR} duration={0.5}>
              <p className="text-lg text-muted-foreground">
                <Highlighter
                  highlightClassName="bg-inherit text-primary"
                  searchWords={["web development", "game development", "University At Buffalo", "BS", "Computer Science"]}
                  textToHighlight={DATA.summary}

                />
              </p>
            </BoxReveal>
          </div>

          {/* right side */}
          <div className="flex flex-1 w-full">
            <HeroIconCloud />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
