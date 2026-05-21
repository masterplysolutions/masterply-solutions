import React from 'react';
import { LegalLayout } from '../components/ui/LegalLayout';
import { privacyPolicyHtml } from '../data/legal-texts';

export function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      activePath="/politica-de-privacidade"
      html={privacyPolicyHtml}
    />
  );
}

export default PrivacyPolicy;
