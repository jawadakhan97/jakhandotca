import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jawad A. Khan",
  EMAIL: "inbox@jakhan.ca",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A digital portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "What I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [
//  { 
//    NAME: "twitter-x",
//    HREF: "https://twitter.com/markhorn_dev",
//  },
  { 
    NAME: "github",
    HREF: "https://github.com/jawadakhan97"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jakhan97",
  }
];
