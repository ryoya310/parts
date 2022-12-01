import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { TransitionProps } from '@mui/material/transitions';

import styles from './index.module.scss'

type Props = {
  dialog: {
    viewType?: string,
    label: string,
    className?: string,
    contents: JSX.Element,
    close(e: React.MouseEvent): void
  },
  dialogOpen: boolean,
  setDialogOpen: any
}
const OpenDialog = (props: Props) => {

  const { dialog, dialogOpen, setDialogOpen } = props;

  const viewType = (dialog.viewType) ? dialog.viewType : 'full'
  const dialogClass = `${styles.container} ${styles[viewType]} ${(dialog.className) ? dialog.className : ''}`
  const dialogHeaderClass = `${styles.header}`
  const dialogContentsClass = `${styles.contents}`

  const handleClose = (e: React.MouseEvent) => {
    if (dialog.close) {
      dialog.close(e);
    }
    setDialogOpen(false)
  }

  return <>
    <Dialog
      className={dialogClass}
      aria-labelledby={viewType}
      open={dialogOpen}
      onClose={handleClose}
      TransitionComponent={Transition(viewType)}
      transitionDuration={300}
    >
      <div className={dialogHeaderClass}>
        <div>{dialog.label}</div>
        <IconButton className={styles.close} onClick={handleClose}><CloseIcon /></IconButton>
      </div>

      <div className={dialogContentsClass}>
        {dialog.contents}
      </div>

    </Dialog>
  </>
}
export default OpenDialog;

const Transition_up = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Transition_left = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='left' ref={ref} {...props} />;
});

const Transition_right = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='right' ref={ref} {...props} />;
});

const Transition_bottom = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const Transition = (viewType: string | null) => {
  if (viewType == 'up') {
    return Transition_up;
  } else if (viewType == 'left') {
    return Transition_right;
  } else if (viewType == 'right') {
    return Transition_left;
  } if (viewType == 'down') {
    return Transition_bottom;
  }
}