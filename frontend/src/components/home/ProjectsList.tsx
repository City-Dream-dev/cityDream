import { FC } from 'react';

import { Grid } from '@mui/material';

import { ProjectCard, ProjectCardProps } from '.';

type ProjectsListProps = {
  projects: ProjectCardProps[];
}

export const ProjectsList: FC<ProjectsListProps> = ({ projects }) => (
  <Grid container spacing={4}>
    {projects.map((project, index) => (
      <Grid xs={12} sm={6} md={4} lg={3} item key={index}>
        <ProjectCard {...project}/>
      </Grid>
    ))}
  </Grid>
);
