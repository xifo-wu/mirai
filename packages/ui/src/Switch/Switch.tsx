import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { alpha, darken, genInnerCls, lighten } from '@xifo/mirai-system';
import classNames from 'classnames';

const innerCls = genInnerCls('switch');

export interface UseControlledProps<T = unknown> {
  controlled: T | undefined;
  default: T | undefined;
}

function useControlled<T>({ controlled, default: defaultProp }: UseControlledProps<T>) {
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = React.useCallback(
    (newValue: T | ((prevValue: T | undefined) => T)) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [],
  );

  return [value, setValueIfUncontrolled] as const;
}

export interface SwitchProps {
  type?: 'outstand' | 'contain';
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  uncheckedIcon?: ReactNode;
  checkedIcon?: ReactNode;
  disabled?: boolean;
  size?: 'sm' | 'md';
  color?: string;
  onChange?: (checked: Boolean) => void;
}

const SwitchRoot = styled.span<SwitchProps>((props) => {
  return {
    display: 'inline-flex',
    width: 58,
    height: 38,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: '0',
    zIndex: '0',
    verticalAlign: 'middle',
    '@media print': {
      colorAdjust: 'exact',
    },
    [`&.${innerCls}-contain`]: {
      width: 42,
      height: 26,
      padding: 0,
      [`& .${innerCls}-base`]: {
        padding: 0,
        margin: 2,
        [`&.${innerCls}-checked`]: {
          transform: 'translateX(16px)',
        },
      },
      [`& .${innerCls}-thumb`]: {
        width: 22,
        height: 22,
      },
      [`& .${innerCls}-track`]: {
        borderRadius: 26 / 2, // ${innerCls}-contain 高度的一半
      },
    },
    ...(props.size === 'sm' && {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${innerCls}-thumb`]: {
        width: 16,
        height: 16,
      },
      [`& .${innerCls}-base`]: {
        padding: 4,
        [`&.${innerCls}-checked}`]: {
          transform: 'translateX(16px)',
        },
      },
      // small contain styles
      [`&.${innerCls}-contain`]: {
        width: 34,
        height: 18,
        padding: 0,
        [`& .${innerCls}-base`]: {
          padding: 0,
          margin: 2,
          [`&.${innerCls}-checked`]: {
            transform: 'translateX(16px)',
          },
        },
        [`& .${innerCls}-thumb`]: {
          width: 14,
          height: 14,
        },
        [`& .${innerCls}-track`]: {
          borderRadius: 18 / 2, // ${innerCls}-contain 高度的一半
        },
      },
    }),
  };
});

const SwitchBase = styled.span((props) => {
  const mode = props.theme.mode || 'light';
  const theme = props.theme[mode];

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    outline: '0',
    border: '0',
    margin: '0',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    textDecoration: 'none',
    padding: '9px',
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    color: '#fff',
    transition:
      'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    [`&.${innerCls}-checked`]: {
      color: theme?.primary,
      transform: 'translateX(20px)',
    },
    [`&.${innerCls}-checked+.${innerCls}-track`]: {
      background: alpha(theme?.primary || '#333', 0.5),
    },
    [`&.${innerCls}-disabled`]: {
      cursor: 'not-allowed',
      color: darken('#fff', 0.065),
    },
    [`&.${innerCls}-disabled+.${innerCls}-track`]: {
      background: alpha('#000', 0.5),
    },
    // 选中后禁用样式
    [`&.${innerCls}-checked.${innerCls}-disabled`]: {
      color: lighten(theme?.primary || '#fff', 0.75),
    },
    [`&.${innerCls}-checked.${innerCls}-disabled+.${innerCls}-track`]: {
      background: alpha(theme?.primary || '#333', 0.25),
    },
  };
});

const SwitchPrivateInput = styled.input((props) => ({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  height: '100%',
  left: '-100%',
  width: '300%',
  top: 0,
  margin: 0,
  padding: 0,
  zIndex: 1,
}));

// 开关的轨道
const SwitchTrack = styled.span((props) => {
  return {
    height: '100%',
    width: '100%',
    borderRadius: '7px',
    zIndex: -1,
    backgroundColor: '#000',
    opacity: 0.38,
    transition:
      'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  };
});

const SwitchThumb = styled.span((props) => ({
  boxSizing: 'border-box',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%',
}));

const Switch = (props: SwitchProps) => {
  const {
    type = 'outstand',
    size = 'md',
    checkedIcon: checkedIconProp,
    uncheckedIcon: uncheckedIconProp,
    checked: checkedProp,
    defaultChecked,
    onChange,
    disabled,
    className,
  } = props;

  const [checked, setChecked] = useControlled<boolean>({
    controlled: checkedProp,
    default: defaultChecked,
  });

  const checkedIcon = checkedIconProp || (
    <SwitchThumb className={classNames(`${innerCls}-thumb`)} />
  );
  const uncheckedIcon = uncheckedIconProp || (
    <SwitchThumb className={classNames(`${innerCls}-thumb`)} />
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // 解决方法 https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const nextChecked = event.target.checked;
    setChecked(nextChecked);

    if (onChange) {
      onChange(nextChecked);
    }
  }

  return (
    <SwitchRoot
      className={classNames(
        `${innerCls}-root`,
        {
          [`${innerCls}-contain`]: type === 'contain',
        },
        className,
      )}
      size={size}
    >
      <SwitchBase
        className={classNames(`${innerCls}-base`, {
          [`${innerCls}-checked`]: checked,
          [`${innerCls}-disabled`]: disabled,
        })}
      >
        <SwitchPrivateInput
          className={`${innerCls}-input`}
          type="checkbox"
          role="switch"
          checked={checkedProp}
          defaultChecked={defaultChecked}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {checked ? checkedIcon : uncheckedIcon}
      </SwitchBase>
      <SwitchTrack className={`${innerCls}-track`} />
    </SwitchRoot>
  );
};

export default Switch;
