import type { LogoProps } from "./Logo.types";

import {
  LogoHorizontal,
  LogoHorizontalWhite,
  LogoIcon,
  LogoIconWhite,
} from "./../../../assets/svgs/logos";

/**
 * Company Logo atom.
 *
 * - `kind`: "horizontal" (wordmark) or "mark" (icon-only)
 * - `theme`:
 *    - "light": for light backgrounds (usually dark ink)
 *    - "dark": for dark backgrounds (inverted/white ink)
 *    - "auto": renders the light variant but swaps to dark when a `.dark` ancestor is present
 */
export default function Logo({
  kind = "horizontal",
  theme = "auto",
  label = "Brand",
  className, // required now
  ...rest
}: LogoProps) {
  const LightComp = kind === "horizontal" ? LogoHorizontal : LogoIcon;
  const DarkComp = kind === "horizontal" ? LogoHorizontalWhite : LogoIconWhite;

  if (theme === "light") {
    return <LightComp aria-label={label} className={className} {...rest} />;
  }

  if (theme === "dark") {
    return <DarkComp aria-label={label} className={className} {...rest} />;
  }

  return (
    <>
      <LightComp
        aria-label={label}
        className={`${className} block dark:hidden`}
        {...rest}
      />
      <DarkComp
        aria-label={label}
        className={`${className} hidden dark:block`}
        {...rest}
      />
    </>
  );
}
