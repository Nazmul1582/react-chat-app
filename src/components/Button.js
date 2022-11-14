import css from "../styles/Button.module.css";

export default function Button({ children, ...rest }) {
  return (
    <button {...rest} className={css.btn}>
      {children}
    </button>
  );
}
