export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  audience: "business" | "builders";
  featured: boolean;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "small-business-website-security-checklist",
    title: "Small Business Website Security Checklist: 12 Checks You Can Do This Week",
    excerpt:
      "A plain-English checklist for UK small business owners: the settings, logins and updates that stop most website attacks, and how to check each one without a developer.",
    content: `Most small business websites aren't hacked by someone who picked them out. They're found by automated tools that scan the internet day and night, looking for sites running old software or using weak logins. Being small doesn't keep you off the list. It usually means nobody is watching.

The good news is that most of the risk comes from a handful of things you can check yourself. Work through this list with a cup of tea and your website, hosting and domain logins to hand.

## 1. Make sure every page uses HTTPS

Visit your site and look for the padlock in the address bar. Then type your address starting with **http://** (no "s") and check you're sent to the secure version automatically. If you're not, ask your host to switch on "force HTTPS". Most control panels have it as a single setting, and free certificates from Let's Encrypt renew themselves.

## 2. Check your PHP version

WordPress, WooCommerce, Joomla, Drupal and many older custom sites run on PHP. **PHP 8.1 and older no longer get security fixes**, and PHP 8.2's security support ends at the end of 2026. Log in to your hosting control panel, find the PHP settings and aim for **8.3 or newer**. Take a backup first and check the site afterwards, because very old plugins sometimes break.

## 3. Update the website software, plugins and themes

Out-of-date plugins are the most common way into WordPress sites. Log in to your admin area and apply pending updates, and switch on automatic updates for minor releases if you can. If a plugin hasn't been updated by its developer in over a year, look for a maintained alternative.

## 4. Delete what you don't use

Every deactivated plugin, unused theme and forgotten test copy of your site (often at addresses like /old or /staging) is more code that can be attacked. If you're not using it, delete it rather than just switching it off.

## 5. Tidy up admin accounts

Look at the list of users who can log in to your website. Remove former staff, old web designers and anyone you don't recognise. Give everyone else the lowest level of access they need, and make sure nobody's username is "admin".

## 6. Turn on two-factor authentication

Two-factor authentication (a code from an app on your phone as well as your password) stops most password-guessing attacks dead. Switch it on for your **website admin, hosting account, domain registrar and email**. If someone gets into your domain registrar, they can take over your website and email in one go.

## 7. Use a password manager

Reused passwords are how one leaked account becomes five. A password manager (Bitwarden, 1Password and the one built into your browser all work) creates and remembers a different strong password for each login.

## 8. Check your backups actually work

Ask your host three questions: how often is my site backed up, how long are backups kept, and are they stored somewhere other than the same server? Then try restoring one, or ask your host to show you how. A backup you've never restored is a hope, not a plan.

## 9. Stop advertising your software versions

Many sites announce exactly which server software, PHP version and WordPress version they run. That tells automated attack tools what to try. Your host or developer can usually hide these with a couple of settings.

## 10. Add basic security headers

Security headers are instructions your site sends to browsers, such as "only ever load me over HTTPS" (HSTS) or "don't let other sites show me inside a frame". They're invisible to visitors, and many hosts or security plugins can add them for you.

## 11. Make sure you own your logins

Plenty of small businesses find out their domain, hosting or website is registered to a web designer who has since moved on. Check the domain is in **your** name and account, set it to auto-renew, and keep the hosting and website admin logins somewhere safe yourself.

## 12. Protect your business email

Scammers can send emails that look like they come from your domain unless three DNS records, SPF, DKIM and DMARC, are set up. We explain them in plain English in [Stop scammers sending email as your business](/blog/spf-dkim-dmarc-small-business-email).

## If you think you've been hacked

Change your hosting, website and email passwords from a clean device, turn on two-factor authentication, and contact your host. They can often restore a clean backup. If customer data may have been exposed, the ICO's website explains when you need to report a breach (within 72 hours for reportable breaches).

## Get a quick outside view

If you'd like to know what your website reveals to anyone who visits, our sister service SecureSiteCheck runs a [free quick check](https://securesitecheck.co.uk/check). It looks at your PHP version (where visible), HTTPS, security headers, CMS version and server exposure, without testing or attacking anything. For a full review, SecureSiteCheck also offers fixed-price assessments.

*Disclosure: SecureSiteCheck is run by the same team as Future Tech Blog.*`,
    date: "2026-10-28",
    readTime: "7 min read",
    category: "Website Security",
    audience: "business",
    featured: true,
    author: {
      name: "Future Tech Blog",
      avatar: "FT"
    }
  },
  {
    slug: "ai-receptionist-uk-trades-costs-compared",
    title: "AI Receptionists for UK Trades: What They Cost and Whether They're Worth It (2026)",
    excerpt:
      "Missed calls are missed jobs. We compare voicemail, a part-time receptionist and AI receptionists from IONOS and Robust AI, with real UK prices including VAT.",
    content: `If you're a plumber, electrician, locksmith or builder, you already know the problem. The phone rings when you're under a sink, up a ladder or driving, and by the time you call back the customer has rung someone else.

An AI receptionist answers those calls for you, asks what the job is, takes the details and sends them to you. This guide covers what it costs in 2026, how it compares with the alternatives, and what to ask before you sign up.

## Your options for missed calls

### Voicemail

Free, but plenty of callers won't leave a message, especially for urgent jobs. They'll just try the next number on Google. The ones who do leave a message often mumble the address or forget their number.

### A part-time receptionist

From April 2026 the National Living Wage is **£12.71 an hour** for workers aged 21 and over. Twenty hours a week works out at about **£1,100 a month** before holiday pay, employer pension and any employer National Insurance. That's good value if you have enough calls and admin to fill the hours, but it's a big step for a sole trader, and it still doesn't cover evenings and weekends.

### An AI receptionist

You set your mobile to divert calls you don't answer to an AI number. The AI answers with your business name, asks what the problem is, how urgent it is and where the customer is, then sends you the details. You keep your existing number and handset.

## What AI receptionists cost in the UK

Prices below were checked on the providers' own websites in October 2026. If you're not VAT registered (most sole traders under the £90,000 threshold aren't), **you can't claim the VAT back**, so the VAT-inclusive price is what you really pay.

### IONOS AI Receptionist

| Plan | Price ex VAT | Price inc VAT | Includes |
|---|---|---|---|
| Flex | £39/month | £46.80 | 30 calls, then 49p per call, 1 call forwarding |
| Flex Pro | £69/month | £82.80 | 100 calls, then 39p per call, 5 forwardings, calendar booking |
| Unlimited | £99/month | £118.80 | Unlimited calls, API, website widget, calendar booking |

All plans include a dedicated number, call summaries by email and a one-month free trial. Per-call charges add up: 60 calls a month on Flex costs £39 + (30 x 49p) = £53.70 ex VAT, or **£64.44 inc VAT**.

### Robust AI

| Plan | Price | Includes |
|---|---|---|
| Core | £99/month, VAT included | Every missed call answered 24/7, AI number, job cards by SMS or WhatsApp, flat rate with no per-call fees |

Diary booking (Google Calendar, Outlook or Cal.com) is an optional add-on, typically £20 to £30 a month. Robust AI is built specifically for trades and set up for you, and the first 10 businesses get a free month on real calls.

*Disclosure: Robust AI is run by the same team as Future Tech Blog.*

## Questions to ask before you sign up

1. **What's the price including VAT?** Some providers quote ex VAT, which makes them look 20% cheaper than they are for most sole traders.
2. **Are there per-call or per-minute charges?** Work out a busy month, not an average one.
3. **How do I get the details?** An email summary is fine at a desk. On site, a text or WhatsApp message is far more useful.
4. **Does it understand trade jobs?** Can it tell an emergency (water pouring through the ceiling) from a quote request (new bathroom next spring)?
5. **Who sets it up?** Some services expect you to write the scripts yourself. Others do it for you.
6. **Can I keep my number?** You should only need to change your phone's call divert setting, which takes a few minutes and can be switched off instantly.
7. **Where is the data stored, and is it GDPR compliant?** Calls contain customers' names, numbers and addresses.
8. **How easy is it to cancel?** Look for monthly rolling contracts and a free trial or money-back guarantee.

## Is it worth it?

The maths is simple. Think about what one typical job is worth to you in profit. If an AI receptionist wins you even one extra job a month that you would otherwise have lost, it has probably paid for itself.

It's also about time. Many sole traders don't want more work, they want fewer interruptions and fewer evenings returning calls. A good AI receptionist filters out time-wasters and sends you only the details you need, so your callbacks are shorter and more likely to turn into booked jobs.

## Try one before you decide

Both providers above let you try before you commit. IONOS has a public demo line on its website, and you can [talk to the Robust AI receptionist in your browser](https://robustai.co.uk), playing a customer with a burst pipe or a tripped fuse box. Five minutes of being an awkward customer will tell you more than any comparison table.`,
    date: "2026-10-28",
    readTime: "7 min read",
    category: "Phone & Calls",
    audience: "business",
    featured: true,
    author: {
      name: "Future Tech Blog",
      avatar: "FT"
    }
  },
  {
    slug: "spf-dkim-dmarc-small-business-email",
    title: "Stop Scammers Sending Email as Your Business: SPF, DKIM and DMARC in Plain English",
    excerpt:
      "Anyone can put your email address in the 'From' line. Three DNS records stop them, and help your real emails stay out of spam. Here's what they do and how to set them up.",
    content: `Here's an uncomfortable fact: unless your domain is set up properly, anyone can send an email that appears to come from you@yourbusiness.co.uk. Scammers use this to send fake invoices to your customers, or "change of bank details" emails that look completely genuine.

Three settings stop it: **SPF, DKIM and DMARC**. They also help your real emails land in inboxes instead of spam folders. They sound technical, but each one is a single line added to your domain's settings, and your email provider tells you exactly what to add.

## Where these settings live

All three are **DNS records**: small text entries stored wherever your domain's DNS is managed. That's usually your domain registrar (such as IONOS, GoDaddy or 123 Reg), your web host, or a service like Cloudflare. If you're not sure, the company that sends your domain renewal bill is a good place to start.

## SPF: who is allowed to send email for you

SPF (Sender Policy Framework) is a list of the services allowed to send email using your domain. When a receiving mail server gets a message "from" you, it checks whether the server that sent it is on your list.

An SPF record is a TXT record that looks something like this:

\`v=spf1 include:spf.protection.outlook.com include:_spf.google.com ~all\`

- Each **include:** is a service allowed to send for you, such as Microsoft 365, Google Workspace, Zoho, or your newsletter tool.
- **~all** at the end means "treat anything else as suspicious". **-all** is stricter: "reject anything else".

Common mistakes:

- **Having two SPF records.** You can only have one. Combine everything into a single line.
- **Forgetting a service.** If your website's contact form, booking system or newsletter sends email as your domain, it needs to be included, or those emails may go to spam.
- **Too many includes.** SPF allows a maximum of 10 DNS lookups, so remove services you no longer use.

## DKIM: a tamper-proof signature

DKIM (DomainKeys Identified Mail) adds a hidden digital signature to every email you send. The receiving server checks the signature against a public key in your DNS. If the email was forged or changed on the way, the check fails.

You don't need to understand the cryptography. In your email provider's admin settings, look for "DKIM" or "domain authentication", switch it on, and copy the record (or records) it gives you into your DNS. Do the same in your newsletter tool if you use one.

## DMARC: what to do when the checks fail

DMARC ties SPF and DKIM together. It tells receiving servers what to do with an email that claims to be from you but fails the checks, and it can send you reports showing who is sending email using your domain.

A DMARC record is a TXT record named **_dmarc** and looks like this:

\`v=DMARC1; p=none; rua=mailto:dmarc-reports@yourbusiness.co.uk\`

The important part is **p=**, the policy:

- **p=none**: just monitor and send reports. Start here.
- **p=quarantine**: send failing emails to spam.
- **p=reject**: block failing emails completely. This is the goal.

Start with **p=none** for a few weeks and read the reports (or use a free DMARC report service to make sense of them). Once you're sure all your genuine email passes, move to quarantine and then reject.

## Why this matters more than it used to

Since February 2024, Google and Yahoo have required everyone sending to Gmail and Yahoo addresses to have at least SPF or DKIM set up, and bulk senders (over 5,000 messages a day to Gmail) must have SPF, DKIM and DMARC. Even if you only send a few emails, setting up all three makes it much more likely your quotes and invoices reach your customers.

## Don't forget domains you don't use for email

Got a second domain that just points to your website, or an old one you're keeping hold of? Scammers can spoof those too. If a domain never sends email, add these two records to say so:

- SPF: \`v=spf1 -all\`
- DMARC (on **_dmarc**): \`v=DMARC1; p=reject;\`

## A quick checklist

1. Find out who manages your domain's DNS.
2. List every service that sends email as your domain: your mailbox provider, website forms, booking system, newsletter tool.
3. Create **one** SPF record that includes them all.
4. Switch on DKIM in each service and add its records.
5. Add a DMARC record with **p=none** and a reporting address.
6. After a few weeks of clean reports, move to **p=quarantine**, then **p=reject**.

## Check what your website and domain reveal

Email security is one part of the picture. Our sister service SecureSiteCheck runs a [free quick check](https://securesitecheck.co.uk/check) that shows who appears to host your website, DNS and email, plus your HTTPS setup and security headers. For the rest, see our [small business website security checklist](/blog/small-business-website-security-checklist).

*Disclosure: SecureSiteCheck is run by the same team as Future Tech Blog.*`,
    date: "2026-10-28",
    readTime: "7 min read",
    category: "Email Security",
    audience: "business",
    featured: true,
    author: {
      name: "Future Tech Blog",
      avatar: "FT"
    }
  }
];

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
