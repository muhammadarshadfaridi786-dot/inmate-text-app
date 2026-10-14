// Standard troubleshooting FAQs rendered on every facility page (Phase 1).
// Generic items apply to all facilities; provider-specific items are added
// only when the facility actually uses that provider. Answers contain only
// widely documented fixes. No per-facility facts, no invented numbers.

export interface TroubleshootingFaqItem {
  question: string
  answer: string
  link?: { label: string; href: string }
}

export function getTroubleshootingFaqs(
  providerSlugs: string[]
): TroubleshootingFaqItem[] {
  const hasCorrLinks = providerSlugs.includes("corrlinks")
  const hasJPay = providerSlugs.includes("jpay")
  const hasSecurus = providerSlugs.includes("securus")

  const items: TroubleshootingFaqItem[] = [
    {
      question: "Why am I not receiving calls from an inmate?",
      answer:
        "Inmates can only call out, so you cannot call an inmate directly. If expected calls are not coming through, check your phone's spam or silence-unknown-callers setting, since carriers often block jail numbers. Save the facility's number as a contact, confirm your number is on the inmate's approved list, and check whether your carrier blocks collect or prepaid calls. If several expected calls fail, contact the facility's phone provider support." +
        (hasSecurus
          ? " For Securus, support can be reached at 972-734-1111 after repeated failed calls."
          : ""),
    },
    {
      question: "Why is my inmate not showing up in search?",
      answer:
        "New arrivals can take 24 to 72 hours to appear in search results, and people in transfer may temporarily disappear from listings. Try alternate spellings and name variations, and make sure you are searching the right system: the federal BOP locator only covers federal inmates, while county and state searches are separate. Some records are withheld for protective custody or sealed cases. If it has been more than a few days, call the facility's records office.",
    },
    {
      question:
        "I sent money but it is not showing in the inmate's account. What should I do?",
      answer:
        "Allow processing time first. Electronic deposits can take hours and money orders can take much longer. Check your receipt and confirm the inmate's name and ID matched. Do not send a second payment until the first one is traced, since duplicate payments are hard to reverse. Contact the money-transfer provider's support with your receipt or confirmation number. If the inmate was recently transferred, funds may follow after a delay.",
    },
    {
      question: "Why was my video visit cancelled or cut off?",
      answer:
        "Most cancellations come from connection problems or conduct-rule violations. Stay in frame, keep your ID ready, follow the dress code, keep other people off camera, and avoid profanity. Visits can also be cancelled for facility lockdowns or schedule changes. For refunds, contact the video provider's support with your visit details.",
    },
    {
      question:
        "What should I do if the facility changed its communications provider?",
      answer:
        "Create an account with the new provider, since old accounts and balances do not transfer automatically. Ask the old provider whether refunds are available for unused balances. Confirm the new provider's phone, video, and messaging setup before your next visit or call.",
    },
  ]

  if (hasCorrLinks) {
    items.push({
      question: "Why is my CorrLinks invite code not working?",
      answer:
        "Invite codes expire, and a code only works for the inmate who sent it. Ask the inmate to send a fresh invite, and enter the code exactly as shown. Also confirm the inmate added you to their approved contact list, since messaging cannot start before that step.",
      link: {
        label: "CorrLinks invite code not working",
        href: "/guides/corrlinks-invite-code-not-working",
      },
    })
  }

  if (hasJPay) {
    items.push({
      question: "Why is my JPay account blocked?",
      answer:
        "A blocked account usually means the inmate blocked contact, the account details do not match, or JPay flagged the account for review. Confirm the inmate's ID and facility, check for an 'inmate blocked' message, and contact JPay support if the block looks like an error.",
      link: { label: "JPay account locked", href: "/guides/jpay-account-locked" },
    })
  }

  return items
}
