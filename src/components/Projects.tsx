import { BLUR_FADE_DELAY, DATA, Project } from "@/lib/data";
import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Projects = () => {
  const projectCategories = Object.keys(DATA.projects);

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from complex web
                applications to data analysis. Here are a few of my favorites.
              </p>
            </div>
          </BlurFade>
          <Tabs defaultValue={projectCategories[0]}>
            <TabsList>
              {projectCategories.map((category, id) => (
                <TabsTrigger key={id} value={category} className="text-xs sm:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {projectCategories.map((category, id) => (
              <TabsContent key={id} value={category}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8 md:mt-10 text-start">
                  {(DATA.projects as { [key: string]: readonly Project[] })[
                    category
                  ].map((project, id) => (
                    <BlurFade key={id} delay={BLUR_FADE_DELAY * id}>
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.technologies}
                        links={project.links}
                        video={project.video}
                        image={project.image}
                      />
                    </BlurFade>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects["Web Applications"].map((project, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * id}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                links={project.links}
                video={project.video}
                image={project.image}
              />
            </BlurFade>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
