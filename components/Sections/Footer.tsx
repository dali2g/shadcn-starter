import React from 'react';
import Link from 'next/link';


const LastUpdate: React.FC = () => {
  return (
    <Link
      href="https://github.com/dali2g"
      target="_blank"
      rel="noreferrer nofollow"
      className="text-sm text-muted-foreground"
    >
      <span>see my recent updates on GitHub</span>
    </Link>
  );
};

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  title,
  href,
  label = undefined,
  isInternal = true,
}) => {
  if (label === 'soon') {
    return (
      <span className="flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-foreground">
        {title}
        <span className="border-divider-light rounded-full border px-2 py-0 text-[10px] uppercase text-muted-foreground">{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} passHref
      className="flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-foreground">
          {title}
          {label && <span className="border-divider-light rounded-full border px-2 py-0 text-[10px] uppercase text-foreground">{label}</span>}
        
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={`footer-link`}
    >
      {title}
    </Link>
  );
};

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

const FooterGroup: React.FC<FooterGroupProps> = ({ title, links }) => {
  return (
    <div className="flex-1">
      <div
        className="mb-2 px-2 text-[13px] text-slate-600 dark:text-slate-400"
      >
        {title}
      </div>
      <ul className="flex flex-col">
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};


const FooterDescription: React.FC = () => {
  return (
    <div className="max-w-[348px]">
      <div
        className="mb-3 text-[13px] text-slate-600 dark:text-slate-400"
      >
        About Me
      </div>
      <p className="mb-4 font-normal leading-relaxed">
        I&apos;m Mohamed Ali, a <strong>Full Stack Developer</strong> who is here to create innovative and user-friendly web applications.
      </p>
      <ul className="-ml-2 flex gap-1">
        <li>
          <Link
            href="https://linkedin.com/in/dali2g"
            target="_blank"
            rel="noreferrer nofollow"
            className="flex h-9 w-9 items-center justify-center"
            aria-label="My Twitter profile"
            title="My Twitter profile"
          >
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/dali2g"
            target="_blank"
            rel="noreferrer nofollow"
            className="flex h-9 w-9 items-center justify-center"
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer
      className="background-grid background-grid--fade-in border-divider-light mt-24 pt-16 mx-10 text-sm text-foreground dark:border-divider-dark dark:text-slate-200"
    >
      <div className="content-wrapper">
        <div className="py-10 font-semibold">
          <div className="flex flex-col-reverse gap-16 lg:flex-row">
            <div className="flex-1">
              <FooterDescription />
            </div>
            <div
              className="-mx-2 flex flex-1 flex-col gap-8 sm:flex-row sm:gap-16 lg:mx-0"
            >
              <div className="flex sm:gap-16">
                <FooterGroup
                  title="Work"
                  links={[
                    { title: 'Contact', href: '/contact' },
                    { title: 'Experience', href: '/experience' },
                    {
                      title: 'Skills and Tools',
                      href: '/skills',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-divider-light flex justify-between border-t py-6 text-xs dark:border-divider-dark"
        >
          <div className="font-semibold">
            &copy; 2023, Mohamed Ali Mejdi
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            <LastUpdate/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
