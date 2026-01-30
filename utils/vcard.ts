
import { Founder } from '../types';

export const downloadVCard = (founder: Founder) => {
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${founder.name}
ORG:InfluRunner
TITLE:${founder.role}
TEL;TYPE=CELL:${founder.phone}
EMAIL:${founder.email}
URL:https://influrunner.com
END:VCARD`;

  const blob = new Blob([vCard], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${founder.name.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
