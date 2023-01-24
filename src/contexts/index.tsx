import { ThemeProvider } from 'styled-components';
import { IDefaultProps } from './types';
import theme from '../styles/themes/default';
import { SideBarProvider } from './SideBarProvider';

const Providers = ({ children }: IDefaultProps) => {
  return (
    <SideBarProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SideBarProvider>
  );
};

export default Providers;
