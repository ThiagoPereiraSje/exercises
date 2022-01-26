import { ChangeEvent, useRef } from "react";

export function phoneMask(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1,2})/, '($1)')
    .replace(/(\d{4,5})/, '$1-');
}

export function cpfMask(value: string): string {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})/, '$1.')
    .replace(/(\d{3}\.\d{3})/, '$1.')
    .replace(/(\d{3}\.\d{3}\.\d{3})/, '$1-');
}

interface Props {
  value: string;
  mask: (value: string) => string;
  onChangeText: (text: string) => void;
}

export default function InputMask({value, mask, onChangeText}: Props) {
  const maskRef = useRef(true);

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (maskRef.current) {
      onChangeText(mask(e.target.value));
      return;
    }

    onChangeText(e.target.value);
  }

  return <input 
    type="text" 
    maxLength={14} 
    value={value} 
    onChange={_onChange}
    onKeyDown={e => maskRef.current = (e.key !== 'Backspace')}/>
}