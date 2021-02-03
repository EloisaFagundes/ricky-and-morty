import React from 'react';

import { Button } from './atm.button';
import './header.css';

export interface HeaderProps {
  user?: any;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className="wrapper">
      <div>
        <img src="assets/logo-ricky-and-morty.png" width="110px" alt="logo" />
      </div>
      <div>
        {user ? (
          <Button onClick={onLogout} />
        ) : (
          <>
            <Button onClick={onLogin} />
            <Button onClick={onCreateAccount} />
          </>
        )}
      </div>
    </div>
  </header>
);
