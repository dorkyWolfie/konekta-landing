'use client';
import { useState } from 'react';
import TurnstileWidget, { useTurnstile } from '@/components/turnstileWidget';

export default function ProductForm({ selectedProduct }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ ime: '', prezime: '', email: '', poraka: '', kolicina: 1 });

  // Auto-verify with server
  const { token, error, isVerified, isVerifying, handleVerify, handleError, handleExpire, reset } = useTurnstile(true);

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isVerified || !token) {
      alert('Ве молиме завршете ја верификацијата');
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tip: 'proizvod', selectedProduct, turnstileToken: token, ...formData }),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({ ime: '', prezime: '', email: '', poraka: '',  kolicina: 1 });
        reset();
      } else {
        alert(result.error || 'Грешка при праќање');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Грешка при праќање на формата');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-6 justify-between">
          <div className="input-div w-1/2">
            <label>Име*</label>
            <input name="ime" type="text" value={formData.ime} onChange={handleChange} required />
          </div>
          <div className="input-div w-1/2">
            <label htmlFor="prezime">Презиме*</label>
            <input id="prezime" name="prezime" type="text" value={formData.prezime} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-div">
          <label htmlFor="email">E-mail*</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-div">
          <label htmlFor="poraka">Порака</label>
          <textarea id="poraka" name="poraka" value={formData.poraka} onChange={handleChange} required />
        </div>
        <input value={`Производ: ${selectedProduct}`} disabled />
        <div className="input-div">
          <label htmlFor="kolicina">Количина:</label>
          <input id="kolicina" name="kolicina" type="number" min="1" placeholder="Количина" required value={formData.kolicina} onChange={handleChange} />
        </div>
      </div>
      <div className="flex flex-col gap-2 self-center">
        <TurnstileWidget onVerify={handleVerify} onError={handleError} onExpire={handleExpire} autoVerify={true} theme="light" size="normal"
        />
        {error && <p className="text-red-500 text-sm">Грешка: {error}</p>}
      </div>
      <button type="submit" className="button-1" disabled={loading} >
        {loading ? 'Се испраќа...' : 'Испрати'}
      </button>
      {success && <p className="text-green-600">Пораката е успешно испратена!</p>}
    </form>
  );
}