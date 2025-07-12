'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../login/page.module.css';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form className={styles.form} autoComplete="off">
          <a
            href="https://colnexa.com.co"
            className={styles.backLink}
            style={{ marginBottom: '1.2rem' }}
          >
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 16L6 10.5L11.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Atrás
          </a>
          <Image
            src="/logo.jpg"
            alt="Logo Colnexa"
            className={styles.logo}
            width={110}
            height={40}
            priority
            style={{ objectFit: 'contain' }}
          />
          <div className={styles.title}>Crear cuenta</div>

          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="#0070f3" strokeWidth="1.5"/><path d="M10 11c-2.5 0-4 1.5-4 3v1h8v-1c0-1.5-1.5-3-4-3z" stroke="#0070f3" strokeWidth="1.5"/><circle cx="10" cy="8" r="2.5" stroke="#0070f3" strokeWidth="1.5"/></svg>
            </span>
            <input
              className={styles.inputField}
              type="text"
              id="fullname"
              placeholder=" "
              required
              autoComplete="name"
            />
            <label className={styles.inputLabel} htmlFor="fullname">Nombre completo</label>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputIcon}>
              <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6.5L10 11.5L17.5 6.5" stroke="#0070f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="2.5" y="6.5" width="15" height="7" rx="2" stroke="#0070f3" strokeWidth="1.5"/></svg>
            </span>
            <input
              className={styles.inputField}
              type="email"
              id="email"
              placeholder=" "
              required
              autoComplete="username"
            />
            <label className={styles.inputLabel} htmlFor="email">Correo electrónico</label>
          </div>

          <div className={styles.inputGroup} style={{ position: 'relative' }}>
            <span className={styles.inputIcon}>
              <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="9" width="10" height="6" rx="2" stroke="#0070f3" strokeWidth="1.5"/><path d="M10 13V11" stroke="#0070f3" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <input
              className={styles.inputField}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder=" "
              required
              autoComplete="new-password"
            />
            <label className={styles.inputLabel} htmlFor="password">Contraseña</label>
            <button
              type="button"
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              onClick={() => setShowPassword((v) => !v)}
              style={{
                position: 'absolute',
                right: '1.1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
                outline: 'none',
                zIndex: 2,
                color: '#0070f3',
                opacity: 0.8,
                height: '1.7em',
                width: '1.7em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              tabIndex={0}
            >
              {showPassword ? (
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-5 0-9.27-3.11-11-8 1.21-3.06 3.6-5.5 6.58-6.71"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 16a3.5 3.5 0 0 0 2.47-6.47"/></svg>
              ) : (
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3.5"/></svg>
              )}
            </button>
          </div>

          <div className={styles.inputGroup} style={{ position: 'relative' }}>
            <span className={styles.inputIcon}>
              <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="9" width="10" height="6" rx="2" stroke="#0070f3" strokeWidth="1.5"/><path d="M10 13V11" stroke="#0070f3" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <input
              className={styles.inputField}
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder=" "
              required
              autoComplete="new-password"
            />
            <label className={styles.inputLabel} htmlFor="confirmPassword">Confirmar contraseña</label>
            <button
              type="button"
              aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              onClick={() => setShowConfirmPassword((v) => !v)}
              style={{
                position: 'absolute',
                right: '1.1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
                outline: 'none',
                zIndex: 2,
                color: '#0070f3',
                opacity: 0.8,
                height: '1.7em',
                width: '1.7em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              tabIndex={0}
            >
              {showConfirmPassword ? (
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-5 0-9.27-3.11-11-8 1.21-3.06 3.6-5.5 6.58-6.71"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 16a3.5 3.5 0 0 0 2.47-6.47"/></svg>
              ) : (
                <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="none" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3.5"/></svg>
              )}
            </button>
          </div>

          <div style={{ width: '100%', margin: '0.7rem 0 0.7rem 0', display: 'flex', alignItems: 'center', gap: '0.7em' }}>
            <input type="checkbox" id="terms" required style={{ accentColor: '#0070f3', width: '1.1em', height: '1.1em' }} />
            <label htmlFor="terms" style={{ fontSize: '0.98rem', color: '#444', cursor: 'pointer' }}>
              Acepto los <a href="#" style={{ color: '#0070f3', textDecoration: 'underline' }}>términos y condiciones</a>
            </label>
          </div>

          <button className={styles.button} type="submit">
            Registrarse
          </button>

          <div style={{ width: '100%', textAlign: 'center', margin: '1.2rem 0 0.5rem 0', color: '#888', fontWeight: 500 }}>
            o
          </div>
          <button
            type="button"
            className={styles.googleButton}
            style={{
              width: '100%',
              background: '#fff',
              color: '#222',
              border: '1.5px solid #e0e0e0',
              borderRadius: '0.8rem',
              padding: '0.9rem',
              fontSize: '1.08rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.7em',
              boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
              cursor: 'pointer',
              marginBottom: '0.7rem',
              transition: 'background 0.2s',
            }}
            tabIndex={0}
          >
            <Image src="/google.png" alt="Google" width={24} height={24} style={{ display: 'inline-block', marginRight: '0.5em', objectFit: 'contain' }} />
            <span style={{ fontWeight: 600, color: '#222' }}>Registrarse con Google</span>
          </button>

          <div style={{ width: '100%', textAlign: 'center', marginTop: '0.7rem' }}>
            <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', fontWeight: 500, fontSize: '1.05rem' }}>
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <video
          className={styles.videoBg}
          src="/login.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
} 