/* Public participant resources supplied by each session's speaker.
   Keep actual destinations here; edge names and speaker details stay in program.js.
   Add another speaker's resources only after receiving their approved public links.
   The Amazon book listing is not the separate participant Kindle redemption link. */
export const RESOURCES_BY_EDGE = {
  'value-edge': [
    {
      title: 'View the Tech Week takeaway deck',
      detail: 'Revisit the key ideas from Bruce’s talk',
      kind: 'Participant deck',
      href: 'https://docs.google.com/presentation/d/1y5jHxBDc1n_1PWC3DXKbcYhE-DEN0YBbjxagIoKHvUA/edit',
    },
    {
      title: 'Read Inspire Your Buyers',
      detail: 'The book by Bruce Scheer',
      kind: 'Book',
      href: 'https://www.amazon.com/dp/B0BZT178MH',
    },
    {
      title: 'Take the free Narrative Assessment',
      detail: 'Find where your narrative needs work',
      kind: 'Assessment',
      href: 'https://inspireyourbuyers.com/narrativeassessment/',
    },
    {
      title: 'See what good looks like',
      detail: 'Explore an example conversation guide',
      kind: 'Example deck',
      href: 'https://docs.google.com/presentation/d/1WT_maUqRT6cbwoHmxXMesSGH1buI2cNYRXtCKDx0i7Q/edit?usp=sharing',
    },
    {
      title: 'Email Bruce to learn more',
      detail: 'Ask about the Value Edge cohort',
      kind: 'Cohort inquiry',
      href: 'mailto:bruce@inspireyourbuyers.com?subject=Value%20Edge%20cohort%20inquiry',
    },
    {
      title: 'Try ValueNavigator free',
      detail: 'Build a CFO-ready analysis your buyer can defend',
      kind: 'Business case',
      href: 'https://inspireyourbuyers.com/solutions/value-navigator/',
    },
    {
      title: 'Recommend a speaker',
      detail: 'Bring the conversation to your team or event',
      kind: 'Speaking',
      href: 'https://inspireyourbuyers.com/speaking/',
    },
    {
      title: 'Connect on LinkedIn',
      detail: 'Stay in touch with Bruce Scheer',
      kind: 'Connect',
      href: 'https://www.linkedin.com/in/bscheer/',
    },
  ],
  'approval-edge': [],
  'expansion-edge': [
    {
      title: 'Schedule a time to speak with Sandy',
      kind: 'Conversation',
      href: 'https://bit.ly/3SjRHTS',
    },
    {
      title: 'Connect with Sandy on LinkedIn',
      kind: 'Connect',
      href: 'https://www.linkedin.com/in/sandysyu',
    },
    {
      title: 'Hear more of Sandy’s perspective on the Expansion Edge',
      kind: 'Resources',
      href: 'https://www.revenuecco.com/homepage/resources',
    },
  ],
};
