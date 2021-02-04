const path = "/assets/social";

export const socials: any = [
  {
    name: "instagram",
    src: `${path}/instagram-logo.png`,
  },
  {
    name: "github",
    src: `${path}/github-logo.png`,
  },
  {
    name: "linkedin",
    src: `${path}/linkedin-logo.png`,
  },
  {
    name: "twitter",
    src: `${path}/twitter-logo.png`,
  },
];

export const socialImgUrl = (socialName: string) => {
  socialName = socialName.toLowerCase()
  let src;
  socials.forEach((s:any) => {
    if (socialName === s.name) {
      src = s.src
      return
    }
  })
  return src
}