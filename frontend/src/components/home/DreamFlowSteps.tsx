import { ReactElement } from 'react';
import { StaticImageData } from 'next/image';

import { Grid, Typography } from '@mui/material';

import { FlowStep } from './FlowStep';

import flowStep1 from '@assets/images/flow-step-1.png';
import flowStep2 from '@assets/images/flow-step-2.png';
import flowStep3 from '@assets/images/flow-step-3.png';
import flowStep4 from '@assets/images/flow-step-4.png';
import flowStep5 from '@assets/images/flow-step-5.png';
import flowStep6 from '@assets/images/flow-step-6.png';
import flowStep7 from '@assets/images/flow-step-7.png';
import flowStep8 from '@assets/images/flow-step-8.png';

type FlowStepListProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  text: ReactElement;
}

const dreamFlowStepsList: FlowStepListProps[] = [
  {
    src: flowStep1,
    alt: 'Зерно в землі',
    title: 'Посадити зерно в землю',
    text: (
      <Typography>
        <Typography component={'span'} fontWeight={700}>Ідея: </Typography>Озвуч
        свою мрію
      </Typography>
    )
  },
  {
    src: flowStep2,
    alt: 'Лійка поливає землю із зерном',
    title: 'Полити землю із зерном',
    text: (
      <Typography>
        Знайди <Typography component={'span'} fontWeight={700}>20+
        однодумців </Typography> голосування за мрію
      </Typography>
    )
  },
  {
    src: flowStep3,
    alt: 'Паросток із землю',
    title: 'Почикати поки зʼявиться паросток',
    text: (
      <Typography>
        <Typography component={'span'}
                    fontWeight={700}>Юридичне: </Typography><br/>
        Чи треба дозвіл?<br/>
        Хто може стати партнером?
      </Typography>
    )
  },
  {
    src: flowStep4,
    alt: 'Маленькі листочки на дереві',
    title: 'Зʼявляються маленькі листочки на дереві',
    text: (
      <Typography>
        <Typography component={'span'}
                    fontWeight={700}>Підготовка: </Typography>до компанії<br/>
        (ми допоможемо оформити проєкт)
      </Typography>
    )
  },
  {
    src: flowStep5,
    alt: 'Дерево квітне',
    title: 'Дерево починає квітнути',
    text: (
      <Typography>
        <Typography component={'span'} fontWeight={700}>Старт
          компанії: </Typography>зі збору ресурсів і волонтерів - успіхів!
      </Typography>
    )
  },
  {
    src: flowStep6,
    alt: 'Зелені плоди на дереві',
    title: 'Зʼявилися зелені плоди на дереві',
    text: (
      <Typography>
        Щоб мрія дозрвіла, потрібно <Typography component={'span'}
                                                fontWeight={700}>активно
        розповідати про мрію</Typography>
      </Typography>
    )
  },
  {
    src: flowStep7,
    alt: 'Поспівші плоди на дереві',
    title: 'Плоди поспіли на дереві',
    text: (
      <Typography>
        <Typography component={'span'} fontWeight={700}>Реалізація
          мрії</Typography> - наступний крок після 100% залучениї ресурсів
      </Typography>
    )
  },
  {
    src: flowStep8,
    alt: 'Плоди у коробці',
    title: 'Зібрати плоди у коробку',
    text: (
      <Typography>
        Коли проєкт реалізовано, <Typography component={'span'}
                                             fontWeight={700}>поділітсья
        результатами </Typography>щоб ниднути інших
      </Typography>
    )
  },
];

export const DreamFlowSteps = () => (
  <Grid container spacing={8}>
    {dreamFlowStepsList.map(({ text, ...imageProps }, index) => (
      <Grid xs={12} sm={6} md={3} item key={index}>
        <FlowStep {...imageProps}>
          {text}
        </FlowStep>
      </Grid>
    ))}
  </Grid>
);
