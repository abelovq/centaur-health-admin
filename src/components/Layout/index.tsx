import React, { FC } from 'react';

interface ILayout {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ header, children, footer }) => {
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
};
