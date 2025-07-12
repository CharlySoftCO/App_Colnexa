import styles from './page.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form className={styles.form}>
          <div className={styles.title}>Iniciar Sesión</div>
          <input
            className={styles.input}
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Contraseña"
            required
          />
          <button className={styles.button} type="submit">
            Entrar
          </button>
        </form>
      </div>
      <div className={styles.right}>
        <video
          className={styles.videoBg}
          src="https://www.w3schools.com/howto/rain.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
} 