import Head from 'next/head';
import { useRouter } from 'next/router';

import { Project } from '../../components/project';

const ProjectPage = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <Head>
        <title>City dream | Project</title>
        <meta name="description" content="Project name"/>
        <link rel="icon" href="/frontend/public/favicon.ico"/>
      </Head>
      <Project/>
    </>
  );
};

export default ProjectPage;
