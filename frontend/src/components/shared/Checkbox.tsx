import {
  FormControlLabel,
  FormControlLabelProps,
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
} from '@mui/material';
import { CheckboxIcon, CheckboxCheckedIcon } from '.';

export type CheckboxProps = {
  checkboxProps: MUICheckboxProps;
  labelProps: Omit<FormControlLabelProps, 'control'>;
}

export const Checkbox = ({ checkboxProps, labelProps }: CheckboxProps & {}) => (
  <FormControlLabel
    {...labelProps}
    control={
      <MUICheckbox
        icon={<CheckboxIcon/>}
        checkedIcon={<CheckboxCheckedIcon/>}
        {...checkboxProps}
      />}
  />
);
