import React from 'react';
import { useStyletron } from 'baseui';

export interface AppToolbarProps {
  children: React.ReactNode;
}

export default function AppToolbar({ children }: AppToolbarProps) {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
      })}
    >
      {children}
    </div>
  );
}
