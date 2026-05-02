import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  lang: string;
  formspreeUrl: string;
  labels: {
    name: string;
    email: string;
    projectType: string;
    message: string;
    budget: string;
    send: string;
    success: string;
    error: string;
  };
  projectTypes: string[];
  budgetRanges: string[];
}

export default function ContactForm({ lang, formspreeUrl, labels, projectTypes, budgetRanges }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            className="text-center py-12"
          >
            <svg className="w-12 h-12 mx-auto mb-4 text-[var(--accent-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg text-[var(--text-primary)]">{labels.success}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-16"
          >
            <div>
              <label htmlFor="name" className="form-label">{labels.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">{labels.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="form-label">{labels.projectType}</label>
              <select
                id="projectType"
                name="projectType"
                required
                className="form-input bg-transparent cursor-pointer"
              >
                <option value="">—</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="form-label">{labels.budget}</label>
              <select
                id="budget"
                name="budget"
                className="form-input bg-transparent cursor-pointer"
              >
                <option value="">—</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="form-label">{labels.message}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="form-input resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm">{labels.error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? '...' : labels.send}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
