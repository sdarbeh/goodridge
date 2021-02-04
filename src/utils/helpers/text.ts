// methods relating to typograghy

export const rmSlash = (str: string) => (str = str.replace(/\\/g, ""));

export const replaceSpace = (str: string, char: string) => {
  return str.split(" ").join(char);
};

export const emailTemplate = (data: any) => {
  if (!data) return "mailto:hello@goodridge.io?subject=Hello,%20Sam!";

  const subject =
    "Goodridge%20Portfolio%20|%20" + replaceSpace(data.name, "%20");
  const body = `${replaceSpace(data.message, "%20")}
    %0D%0A
    %0D%0APhone%20numer:%20${data.phone}
    %0D%0AEmail:%20${data.email}%0D%0A
    %0D%0ARegards,
    %0D%0A${replaceSpace(data.name, "%20")}`;

  return `mailto:hello@goodridge.io?subject=${subject}&body=${body}`;
};
