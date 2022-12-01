import * as React from 'react';

import { Button, Box } from '@mui/material/';

import Dialog from "../components/dialog";

function DialogPage() {

  return <>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      <Dialog
        isOpen={false}
        viewType={'left'}
        button={'ダイアログ'}
        label={'Dialog'}
        contents={<>123</>}
      />
    </Box>
  </>
}
export default DialogPage;