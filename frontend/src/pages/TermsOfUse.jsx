import React from 'react';
import { LegalLayout } from '../components/ui/LegalLayout';
import { termsOfUseHtml } from '../data/legal-texts';

export function TermsOfUse() {
  return (
    <LegalLayout
      title="Termos de Uso"
      activePath="/termos-de-uso"
      html={termsOfUseHtml}
    />
  );
}

export default TermsOfUse;
