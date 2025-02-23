"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Jun2024 - Sep2024",
    currentPosition: "HeadStarter AI",
    place: "Flagstaff,AZ",
    previousPositions: ["Software Engineering Fellowship"],
    description:
    "Developed a pantry management app using Next.js, Material UI, and Firebase, assisting users in tracking inventory and managing expiration date alerts, reducing food wastage.<br>Developed a Flashcard SaaS website using React.js, Pinecone, and OpenAI, and Stripe which helps the students to learn the interesting topics with fun.<br>Developed an AI chatbot application using Next.js, and Open AI which helps the customers to resolve the queries instantly.",
    skills: [
      "Next.js",
      "Material UI",
      "Firebase",
      "React.js",
      "OpenAI",
      "Stripe",
      "Nodejs",
      "Clerk",
      "LLama AI",
      "TypeScript",
      "Angular",
    ],
  },
  {
    timeline: "Jun2022 – Aug2023",
    currentPosition: "Infosys Limited", 
    place: "Telangana, India",
    previousPositions: ["Digital Specialist Engineer"],
    description:
    "Developed reusable React components for a product recommendation and optimized NPM packages which improved the component reusability and also reduced redundant API calls by 30%.Designed Java-based microservices with Spring Boot and Hibernate for an e-commerce platform which reduced response time by 30% during the peak sales event.Integrated Kafka with Node.js for order processing and inventory updates, communicating with Java (Spring Boot) backend, which improved order fulfillment speed and reduced inventory sync latency by 25%.Developed unit tests using JUnit and Mockito, achieving 95% test coverage and ensuring robust and reliable order processing.Mapped and optimized 20,000+ MySQL customer records using Hibernate ORM by enhancing API integration to improve the date retrieval efficiency in real-time.Deployed and managed containerized microservices with Kubernetes, optimizing system performance during peak traffic to ensure application availability and scalability.Handled version control and source code management using Git and GitHub, utilizing branching strategies and pull requests to facilitate smooth collaboration and ensure code quality in development.",
    skills: [
      "React",
      "Spring Boot",
      "Hibernate",
      "Node.js",
      "Kafka",
      "Kubernetes",
      "Git",
      "GitHub",
    ],
  },
  {
    timeline: "Aug2021 - Jun2022",
    currentPosition: "Infosys Limited",
    place: "Telangana, India",
    previousPositions: ["Software Engineer Trainee"],
    description:
    "Developed various RESTful APIs using ASP .NET Core, and also optimizing API performance by implementing caching, error handling, and data validation.Designed a migration model for Azure resources like Azure Servicebus and CosmosDB to migrate authentication to a password-less mechanism, enhancing security and user experience.",
    skills: [
      "RESTful API's",
      "ASP.NET Core",
      ".NET WebAPI",
      ".NET Entity FrameWork",
      ".NET MVC",
      "Azure Services",
      "C#",
      "MSSQL",
      "Microsoft PowerBI",
      "CI/CD Pipelines",
      "Azure Devops",
    ],
  },
  
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:tejaswipemmasani8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
