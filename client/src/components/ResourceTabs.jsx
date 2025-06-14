import * as React from 'react';
import {Box, Tab, Tabs} from '@mui/material';
import DLEtab from './subcomponents/resultsTabs/DLEtab';
import DPDtab from "./subcomponents/resultsTabs/DPDtab";
import GTGtab from "./subcomponents/resultsTabs/GTGtab";
import { hasData } from '../modules/checkers';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


function injectProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ResourceTabs({wordData}) {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabMap = {
    "DLE": <DLEtab terms={wordData?.DLE?.data}/>,
    "DPD": <DPDtab entries={wordData?.DPD?.data?.entries}/>,
    "GTG": <GTGtab data={wordData?.GTG?.data}/>
  }
  let tabIdx = 0;

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    wordData &&
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            variant="scrollable"
            className="tabs"
            value={activeTab}
            onChange={handleChange}
          >
            {
              Object.keys(wordData).map(e =>
                wordData[e].data && <Tab label={wordData[e].name}/>
              )
            }
          </Tabs>
        </Box>
        {
          Object.keys(wordData).map(e =>
            wordData[e].data &&
              <CustomTabPanel key={tabIdx} value={activeTab} index={tabIdx++}>
                {tabMap[e]}
              </CustomTabPanel>
          )
        }
      </Box>
    </>


  );
}
