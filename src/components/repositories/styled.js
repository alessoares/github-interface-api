import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  gap: 25px;  
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
   border: 1px solid #DCDCDC;
   padding: 5px 10px;
   cursor: pointer;
   user-select: none;
   box-shadow: 1px 1px 5px #DCDCDC;
   transition: 0.4s;

   &:hover{
    border: 1px solid #DAA520;
    box-shadow: 1px 1px 5px #DAA520;
   }

   &:focus{
     outline: none;
   }

   &.is-selected{
    border: 1px solid #DAA520;
    box-shadow: 1px 1px 5px #DAA520;
   }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    min-height: 50vh;
    width: 100%;
    padding: 8px;
    display: none;
    
    /* box-shadow: 0 0 5px #808080; */
    
    &.is-selected{
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      gap: 9px;
      flex-wrap: wrap;
      
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";
