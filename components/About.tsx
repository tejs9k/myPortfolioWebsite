"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
        I am currently pursuing Master's in Computer Science at Northern Arizona University. I am a dedicated and experienced .NET full stack Developer in API development, and cloud services using Azure and AWS. My recent role as a Digital Specialist Engineer at Infosys Limited, working for TJX Companies Inc., involved significant work in migrating data from on-premises applications to the Azure Cloud, creating stored procedures and functions for sales data analysis, and developing RESTful APIs using ASP.NET Core. I am adept at using various DevOps tools like Docker, Kubernetes, and GIT, and have a strong foundation in programming languages including Python, C#, MSSQL, and Java, HTML, CSS, JavaScript.
        Here are the highlights of certifications achieved:
        <span className="text-white">
        1.Microsoft Azure Developer Associate
        2.Infosys certified Microsoft SQL Server Developer
        3.Infosys certified ASP.NET Core MVC Developer 
        4.Infosys certified DOTNET Core Web API Developer.
        </span>{" "}
        </p>
      </div>
    </section>
  );
}
