import { SITE } from './config';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/logo.png`,
      width: 1200,
      height: 630,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE.contact,
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    founder: {
      '@type': 'Person',
      name: SITE.author,
      description: SITE.authorCredentials,
    },
    sameAs: [
      'https://www.facebook.com/banquesmaroc',
      'https://twitter.com/banquesmaroc',
      'https://www.linkedin.com/company/banquesmaroc',
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/comparateur-banques/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.author,
    description: SITE.authorCredentials,
    url: SITE.url,
    jobTitle: 'Fondateur',
    worksFor: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function buildWebApplicationSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MAD',
    },
    author: {
      '@type': 'Person',
      name: SITE.author,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function buildArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: SITE.author,
      description: SITE.authorCredentials,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function buildFinancialProductSchema(
  bankName: string,
  productName: string,
  interestRate: { min: number; max: number },
  category: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: productName,
    provider: {
      '@type': 'BankOrCreditUnion',
      name: bankName,
    },
    interestRate: {
      '@type': 'QuantitativeValue',
      minValue: interestRate.min,
      maxValue: interestRate.max,
      unitCode: 'P1',
    },
    category,
  };
}
