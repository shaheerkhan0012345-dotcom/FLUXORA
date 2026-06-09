export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; desc: string; iconName: string }[];
}

export interface StatMetric {
  value: string;
  label: string;
  linkText?: string;
}

export interface UserReview {
  name: string;
  role: string;
  avatarUrl: string;
}
