'use client';

export default function SaveContact({ uri, className='' }) {
  const downloadVCard = async () => {
    const res = await fetch(`/api/vcard?uri=${uri}`);

    if (!res.ok) {
      alert('Failed to download contact');
      return;
    }

    const link = document.createElement('a');
    link.href = `/api/vcard?uri=${uri}`;
    link.download = `${uri}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadVCard} className={className}>
      Превземи<br />контакт
    </button>
  );
}
