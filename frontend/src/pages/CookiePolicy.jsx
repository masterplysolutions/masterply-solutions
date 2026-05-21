import React from 'react';
import { LegalLayout } from '../components/ui/LegalLayout';
import { cookiePolicyHtml } from '../data/legal-texts';

export function CookiePolicy() {
  return (
    <LegalLayout
      title="Política de Cookies"
      activePath="/politica-de-cookies"
      html={cookiePolicyHtml}
    />
  );
}

export default CookiePolicy;
