// Button.jsx
import classnames from "classnames";

function Button({ sm, lg, children }) {
  return (
    <button
      className={classnames("font-bold py-2 px-4 rounded", {
        "text-xs": sm,
        "text-xl": lg,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
