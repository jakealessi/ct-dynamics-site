"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { ComponentProps, ReactNode } from "react";

function routePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const withoutBase =
    basePath && (path === basePath || path.startsWith(`${basePath}/`))
      ? path.slice(basePath.length)
      : path;
  return withoutBase.split(/[?#]/)[0].replace(/\/$/, "") || "/";
}

type CurrentLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function CurrentLink({ href, ...props }: CurrentLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      href={href}
      aria-current={
        pathname && routePath(pathname) === routePath(href) ? "page" : undefined
      }
    />
  );
}

export function MobileMenu({ children }: { children: ReactNode }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (
        menu.current?.open &&
        event.target instanceof Node &&
        !menu.current.contains(event.target)
      ) {
        menu.current.open = false;
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details
      className="mobile-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          event.preventDefault();
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary>
        <span>Menu</span>
        <span className="menu-lines" aria-hidden="true" />
      </summary>
      <nav
        aria-label="Mobile navigation"
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a") &&
            menu.current
          ) {
            menu.current.open = false;
          }
        }}
      >
        {children}
      </nav>
    </details>
  );
}
