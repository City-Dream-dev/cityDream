import { createContext, useContext } from 'react';
import { ProjectCardProps } from '@components';

export const projectsContext = createContext<{
  project: ProjectCardProps;
  projects: ProjectCardProps[] | null;
}>({
  project: {
    id: '',
    src: '',
    alt: '',
    title: '',
    authorAvatar: '',
    authorFirstName: '',
    authorLastName: '',
    description: '',
  },
  projects: null,
});

export const useProjectsProvider = () => useContext(projectsContext);