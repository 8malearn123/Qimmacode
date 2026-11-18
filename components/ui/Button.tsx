import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "soft";

type CommonProps = {
  variant?: Variant;
  /** Material Symbols Rounded ligature name, rendered before the label. */
  icon?: string;
  /** Stretch to the full width of the container. */
  block?: boolean;
  children?: ReactNode;
  className?: string;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };
type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

/**
 * Qimma's primary action control (42px, 12px radius, weight-600 label, optional
 * leading icon). Renders a link when `href` is given, a native button otherwise.
 * Styles live in styles/design-system.css (.qm-btn).
 */
export function Button(props: LinkProps | NativeButtonProps) {
  const { variant = "primary", icon, block, children, className, ...rest } = props;
  const cls = ["qm-btn", `qm-btn--${variant}`, block && "qm-btn--block", className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {icon && (
        <span className="msr" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
