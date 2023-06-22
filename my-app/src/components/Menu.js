import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import './Menu.css'

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  // const containerClassName = `${isDarkMode ? 'dark-mode' : 'light-mode'} ${collapsed ? 'collapsed' : ''}`;
  return (
    // <div className={containerClassName}>
    <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 9999 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon openIcon={<SpeedDialIcon />} />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            className='switch'
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    // </div>
  );
}
