import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT_CLICKS_BY_PK } from "../graphql/project";
import { toggleLikedProject } from "../store/actions/likedProjectsAction";

export default (name: string) => {
  const likedProjects = useSelector((state: RootState) => state.likedProjects);
  const dispatch = useDispatch();

  let increment = {
    name: name.replace("-", " "),
    likes: 0,
    github_clicks: 0,
    page_clicks: 0,
    website_clicks: 0,
  };

  const projectLiked = likedProjects.find((p: string) => p === increment.name)
  
  return {
    likedProjects,
    projectLiked: projectLiked ? true : false,
    setLikedProjects: () => dispatch(toggleLikedProject(increment.name, projectLiked)),
    // ---- varibales
    toggleLikeVariables: () => {
      increment.likes = projectLiked ? -1 : 1;
      return increment;
    },
    githubVariables: () => {
      increment.github_clicks = 1;
      return increment;
    },
    pageVariables: () => {
      increment.page_clicks = 1;
      return increment;
    },
    siteVariables: () => {
      increment.website_clicks = 1;
      return increment;
    },
    // ---- update variables
    updateProj: useMutation(UPDATE_PROJECT_CLICKS_BY_PK, {
      onCompleted: (data) => data,
    }),
  };
};
