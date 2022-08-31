import { Box } from '@mui/system';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/icons/logo.svg';

export const HeaderLogo = () => (
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