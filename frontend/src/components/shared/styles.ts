import { styled } from '@mui/system';

export const CheckboxIcon = styled('span')(({ theme: { palette } }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: palette.text.subInfo,
  backgroundColor: 'transparent',
  'input:disabled ~ &': {
    borderColor: palette.text.disabled,
  },
}));

export const CheckboxCheckedIcon = styled(CheckboxIcon)(({ theme: { palette } }) => ({
  borderColor: palette.success.main,
  backgroundColor: palette.success.main,
  'input:disabled ~ &': {
    backgroundColor: palette.text.disabled,
  },
}));