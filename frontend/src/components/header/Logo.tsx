import { Box } from '@mui/system';
import Link from 'next/link';

import logo from '@assets/icons/logo.svg';

import { Image } from '..';

export const Logo = () => (
  <>
    <Box
      position={'absolute'}
      top={0}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
      left={'calc(50% - 100px)'}
    >
      <Link href={'/'}>
        <a style={{ display: 'block', lineHeight: 0 }}>
          <Image
            width={200}
            height={26}
            src={logo}
            alt={'City dream logo'}
          />
        </a>
      </Link>
    </Box>
  </>
)
