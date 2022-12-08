import { TrelloProjectCardProps } from './types';
import { ProjectCardProps } from '@components';
import projectImage from '@mocks/images/project-image-mock.png';

const normalizeTrelloData = (
  {
    ID,
    Title,
    CoverImage,
    Description,
    Owner: {
      FirstName: {
        String: firstName,
      },
      LastName: {
        String: lastName,
      },
      Avatar: {
        String: avatar,
      }
    },
  }: TrelloProjectCardProps):ProjectCardProps => ({
  id: ID,
  title: Title,
  alt: Title,
  src: CoverImage || projectImage,
  authorAvatar: avatar,
  authorFirstName: firstName,
  authorLastName: lastName,
  description: Description,
})

const CORE_API = 'https://www.citydream.pp.ua/api'

export const getProjects = async (): Promise<ProjectCardProps[] | null> => {
  const res: TrelloProjectCardProps[] = await fetch(`${CORE_API}/dreams.json`)
    .then(data => data.json())
    .catch(err => console.error(err));

  return res?.map(normalizeTrelloData) || null;
}

export const getProject = async (id: string): Promise<ProjectCardProps | null> => {
  const res: TrelloProjectCardProps = await fetch(`${CORE_API}/${id}`)
    .then(data => data.json())
    .catch(err => console.error(err));

  return res ? normalizeTrelloData(res) : null;
}