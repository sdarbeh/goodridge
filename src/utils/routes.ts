// app routing
export const appRoutes = {
  home: '/',
  archive: '/archive',
  contact: '/contact',
  socials: '/socials',
};

export const adminRoutes = {
  admin: '/admin',
  dashboard: '/admin/dashboard',
  site: '/admin/site',
  projects: '/admin/projects',
  messages: '/admin/messages',
}

export const appProjectRoute = (name: string) => `${appRoutes.archive}/${name.toLowerCase().split(' ').join('-')}`