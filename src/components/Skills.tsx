import { BLUR_FADE_DELAY, DATA } from "@/lib/data";
import BlurFade from "./magicui/blur-fade";
import { Badge } from "./ui/badge";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-col space-y-6">
          {Object.entries(DATA.skills).map(([key, value], id) => (
            <div className="flex gap-4 w-full" key={id}>
              <BlurFade delay={BLUR_FADE_DELAY * id}>
                <h4 className="w-full font-semibold whitespace-nowrap">{key}</h4>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {value.map((skill, valueId) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * id + valueId * 0.15}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
