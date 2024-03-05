export type HeaderTitles = {
  [key: string]: string;
};

export const headerTitles: HeaderTitles[] = [
  { profile: 'Profile' },
  { '': 'Home' },
  { settings: 'Settings' },
  { people: 'People' },
];

export function getHeaderTitles(pathname: string): string {
  // Extract the "page" part from the pathname
  const [, page] = pathname.split('/');

  // Find the entry in headerTitles array that matches the extracted "page"
  const matchingEntry = headerTitles.find((entry) => entry[page] !== undefined);

  // If a matching entry is found, return its value, otherwise return an empty string
  return matchingEntry ? matchingEntry[page] : '';
}
