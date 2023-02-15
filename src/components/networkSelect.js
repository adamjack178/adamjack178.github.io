import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import networkStyles from './styles/networkSelect.module.scss';

import avax from './assets/avax.png'
import poly from './assets/polygon.png'

const NetworkSelect = () => (
  <Select.Root>
    <Select.Trigger className={networkStyles.SelectTrigger} aria-label="Network">
      <Select.Value placeholder={<img className={networkStyles.logo} src={avax} alt="avax logo" />} />
      <Select.Icon className={networkStyles.SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={networkStyles.SelectContent}>
        <Select.ScrollUpButton className={networkStyles.SelectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={networkStyles.SelectViewport}>
          <Select.Group>
            <SelectItem value="avalanche"><img className={networkStyles.logo} src={avax} alt="avax logo" /></SelectItem>
            <SelectItem value="polygon"><img className={networkStyles.logo} src={poly} alt="polygon logo" /></SelectItem>
          </Select.Group>

        </Select.Viewport>
        <Select.ScrollDownButton className={networkStyles.SelectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames(`${networkStyles.SelectItem}`, className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={networkStyles.SelectItemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default NetworkSelect;