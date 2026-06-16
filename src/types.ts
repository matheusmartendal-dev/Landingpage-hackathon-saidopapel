/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: 'sparkles' | 'target' | 'users' | 'search' | 'award' | 'trending';
  highlightText?: string;
}

export interface DifferentialItem {
  number: number;
  title: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoType: 'tech' | 'fin' | 'creative' | 'global' | 'custom';
}
