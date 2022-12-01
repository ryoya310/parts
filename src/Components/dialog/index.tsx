import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import styles from './index.module.scss'

type Props = {
  isOpen: boolean
  viewType?: 'up' | 'left' | 'right' | 'down' | 'full' | 'harf'
  button: string
  label: string
  contents: JSX.Element
}

export default function OpenDialog(props: Props) {

  let { isOpen, viewType, button, label, contents } = props;

  const [open, setOpen] = React.useState(isOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let cls = [styles.container]
  if (viewType) {
    cls.push(styles[viewType])
  }

  return <>
      <button type='button' onClick={handleClickOpen}>{button}</button>
      <Dialog
        open={open}
        // keepMounted
        onClose={handleClose}
        className={cls.join(' ')}
        aria-labelledby={viewType}
        TransitionComponent={(viewType === 'up' || viewType === 'left' || viewType === 'right' || viewType === 'down') ? Transition : undefined}
        transitionDuration={300}
      >
        <div className={styles.header}>
          <div>{label}</div>
          <IconButton className={styles.close} onClick={handleClose}><CloseIcon /></IconButton>
        </div>

        <div className={styles.contents}>
          {contents}
        </div>
      </Dialog>
  </>
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction={props.children.props.ownerState['aria-labelledby']} ref={ref} {...props} />;
});