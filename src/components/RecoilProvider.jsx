'use client';

import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

export default function RecoilProvider({ children }) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      {children}
    </RecoilRoot>
  );
}
