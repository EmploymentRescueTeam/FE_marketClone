import React from 'react';
import '@/styles/components/btn.scss';
import Link from 'next/link';

interface BtnProps {
  type: 'button' | 'submit' | 'reset';
  href?: string; // href는 선택적인 프로퍼티로 변경
  label: string;
  disabled: boolean;
  onClick?: () => void;
}

export default function Btn({
  type,
  href,
  label,
  disabled,
  onClick,
}: BtnProps) {
  const buttonElement = (
    <div id="button">
      <button type={type} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );

  // href가 있을 때만 Link 컴포넌트로 감싼다.
  return href ? (
    <Link id="button" href={href}>
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
}
