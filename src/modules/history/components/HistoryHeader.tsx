import { AppBar, Button, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { UtsLeftRight } from '../../../components/UtsLeftRight';
import { Session } from '../../../services/Session';
import {  History } from 'history';

interface HistoryHeaderProps {
  history: History
  isLoggedIn: boolean,
}

const HistoryHeader: React.FC<HistoryHeaderProps>= ({ history, isLoggedIn }) => {
  function onRouteClick(path: string) {
    history.push(path);
  }

  async function onLogoutClick() {
    await Session.logout();
  }

  return (
    <AppBar
      className="history-header"
      position="sticky"
    >
      <Toolbar>
        <UtsLeftRight
          centerVertically={true}
          left={(
            <>
              <Button
                color="inherit"
                onClick={() => onRouteClick('/home')}
              >
                {browser.i18n.getMessage('home')}
              </Button>
              <Button
                color="inherit"
                onClick={() => onRouteClick('/about')}
              >
                {browser.i18n.getMessage('about')}
              </Button>
              <Button
                color="inherit"
                onClick={() => onRouteClick('/options')}
              >
                {browser.i18n.getMessage('options')}
              </Button>
            </>
          )}
          right={isLoggedIn  && (
            <Button
              color="inherit"
              onClick={onLogoutClick}
            >
              {browser.i18n.getMessage('logout')}
            </Button>
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export { HistoryHeader };