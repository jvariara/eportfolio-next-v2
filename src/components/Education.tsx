import { BLUR_FADE_DELAY, DATA } from "@/lib/data";
import BlurFade from "./magicui/blur-fade";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>

        <div className="flex flex-col space-y-4">
          {DATA.education.map((education, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * id}>
              <EducationCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={education.date}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
