import React, { ElementType } from 'react';
import classNames from 'classnames';
import TypographyRoot, { innerCls, TypographyProps } from './TypographyRoot';


function elementAs(type: string | undefined) {
  if (!type) {
    return 'span';
  }

  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'code'].includes(type)) {
    return type as ElementType;
  }

  if (['lgTitle', 'title'].includes(type)) {
    return 'h1'
  }
}

const Typography = (props: TypographyProps) => {
  const { className, type, children, ...rest } = props;

  return (
    <TypographyRoot
      className={classNames(innerCls, { [`${innerCls}-${type}`]: !!type }, className)}
      as={elementAs(type)}
      type={type}
      {...rest}
    >
      {children}
    </TypographyRoot>
  );
};

export default Typography;
