"use client";

import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type CommonButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    as?: "button";
  };

type ButtonAsLink = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    as?: "a";
    download?: boolean | string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  leftIcon,
  rightIcon,
  iconPosition = "left",
  isLoading = false,
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const resolvedLeftIcon = leftIcon || (icon && iconPosition === "left" ? icon : undefined);
  const resolvedRightIcon = rightIcon || (icon && iconPosition === "right" ? icon : undefined);

  const combinedClassName = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {isLoading && <span className={styles.spinner} aria-hidden="true" />}
      {!isLoading && resolvedLeftIcon && (
        <span className={styles.icon}>{resolvedLeftIcon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {!isLoading && resolvedRightIcon && (
        <span className={styles.icon}>{resolvedRightIcon}</span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel, onClick, ...rest } = props as ButtonAsLink;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal && !download) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          onClick={onClick}
          target={target}
          rel={rel}
          {...(rest as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={combinedClassName}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  const { disabled, type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...rest}
    >
      {content}
    </button>
  );
};
