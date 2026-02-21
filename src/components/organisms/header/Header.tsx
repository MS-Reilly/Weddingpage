// src/components/organisms/Header/Header.tsx
"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "@components/atoms/logo/Logo";
import { Button } from "@components/atoms/button";
import DesktopFlyout from "@components/molecules/desktopFlyout";
import DesktopNavLinks from "@components/molecules/desktopNavLinks";
import { IconsMenuBurger, IconsMaps, IconsX } from "@assets/svgs/icons";
import { openRsvp } from "@/store/features/uiSlice";
import { toggleLanguage } from "@/store/features/languageSlice";
import type { RootState } from "@/store/store";
import type { HeaderProps } from "./header.types";

const HEADER_SIZES = {
  icon: "h-5 w-5",
  navPadding: "p-6 lg:px-8",
};

export default function Header({ data = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);
  const nextLanguageLabel = language === "es" ? "EN" : "ES";
  const languageButtonLabel =
    language === "es" ? "Cambiar a Ingles" : "Switch to Spanish";

  return (
    <header className="floral-section-light sticky top-0 z-[100] overflow-visible bg-white/95 dark:bg-gray-900/95 shadow">
      <nav
        aria-label="Global"
        className={`mx-auto flex max-w-7xl items-center justify-between z-10 overflow-visible ${HEADER_SIZES.navPadding}`}
      >
        {/* Logo */}
        <div className="flex lg:flex-2">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Constanza & Shane</span>
            <Logo className="h-8 w-auto lg:h-12" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            startIcon={<IconsMaps className="h-4 w-4" aria-hidden="true" />}
            aria-label={languageButtonLabel}
            onClick={() => dispatch(toggleLanguage())}
          >
            {nextLanguageLabel}
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <IconsMenuBurger aria-hidden="true" className={HEADER_SIZES.icon} />
          </button>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {data.map((item) => {
            if (item.type === "desktopFlyout") {
              return (
                <DesktopFlyout
                  key={item.id}
                  buttonText={item.buttonText}
                  items={item.items}
                  callsToAction={item.callsToAction}
                />
              );
            }
            if (item.type === "navLink") {
              return <DesktopNavLinks key={item.id} navigation={[item.link]} />;
            }
            return null;
          })}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 items-center justify-end gap-3">
          <Button
            size="sm"
            variant="ghost"
            startIcon={<IconsMaps className="h-4 w-4" aria-hidden="true" />}
            aria-label={languageButtonLabel}
            onClick={() => dispatch(toggleLanguage())}
          >
            {nextLanguageLabel}
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => dispatch(openRsvp())}
          >
            RSVP
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 shadow-lg ring-1 ring-black/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo className="h-6 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IconsX aria-hidden="true" className={HEADER_SIZES.icon} />
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {data.map((item) => {
              if (item.type === "desktopFlyout") {
                return (
                  <div key={item.id}>
                    <div className="px-1 text-base font-semibold text-gray-900 dark:text-white">
                      {item.buttonText}
                    </div>
                    <ul className="mt-2 space-y-1">
                      {item.items.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 rounded-lg py-2 pl-3 pr-3 text-sm leading-7 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <sub.icon className="h-5 w-5 text-brand-500" />
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (item.type === "navLink") {
                return (
                  <div key={item.id}>
                    <Link
                      to={item.link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {item.link.icon && (
                        <item.link.icon className="h-5 w-5 text-brand-500" />
                      )}
                      {item.link.children}
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-6">
            <Button
              size="md"
              variant="primary"
              className="w-full"
              onClick={() => {
                dispatch(openRsvp());
                setMobileMenuOpen(false);
              }}
            >
              RSVP
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
