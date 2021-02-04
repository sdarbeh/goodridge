export const TOGGLE_LIKED_PROJECT = "TOGGLE_LIKED_PROJECT";

export const toggleLikedProject = (name: string, projectLiked: string) => ({ 
  type: TOGGLE_LIKED_PROJECT,
  name,
  projectLiked
})