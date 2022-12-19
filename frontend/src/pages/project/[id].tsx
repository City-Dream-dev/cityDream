import Head from 'next/head';

import { Project } from '../../components/project';
import { getProject, getProjects } from '@api';
import { FC } from 'react';
import { ProjectCardProps } from '@components';
import { GetStaticProps } from 'next';
import { projectsContext } from '@context';

type ProjectPageProps = {
  project: ProjectCardProps;
  projects: ProjectCardProps[];
}

const ProjectPage: FC<ProjectPageProps> = ({ projects, project }) => {

  return (
    <>
      <Head>
        <title>City dream | {project?.title || 'Project'}</title>
        <meta name="description" content="Project name"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <projectsContext.Provider value={{ projects, project }}>
        <Project/>
      </projectsContext.Provider>
    </>
  );
};

export const getStaticPaths = async () => {
  const projects = await getProjects();
  const paths = projects?.map(({ id }) => ({
    params: { id },
  })) || [];

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string | undefined;

  // TODO: replace when we have correct endpoint for getting project data
  const projects = await getProjects();
  const project = projects?.find(({ id: projectId }) => id === projectId);
  // const project = id ? await getProject(id) : null;

  return {
    props: {
      project,
      projects,
    },
  };
};

export default ProjectPage;
