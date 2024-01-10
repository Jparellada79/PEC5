export interface ComicResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicData;
  etag: string;
}

export interface ComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Resource;
  variants: Resource[];
  collections: Resource[];
  collectedIssues: Resource[];
  dates: DateObject[];
  prices: Price[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorSummary;
  characters: CharacterSummary;
  stories: StorySummary;
  events: EventSummary;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface Resource {
  resourceURI: string;
  name: string;
}

export interface DateObject {
  type: string;
  date: Date;
}

export interface Price {
  type: string;
  price: number;
}

export interface Image {
  path: string;
  extension: string;
}

export interface CreatorSummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: Creator[];
}

export interface Creator {
  resourceURI: string;
  name: string;
  role: string;
}

export interface CharacterSummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: Character[];
}

export interface Character {
  resourceURI: string;
  name: string;
  role: string;
}

export interface StorySummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: Story[];
}

export interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventSummary {
  available: number;
  returned: number;
  collectionURI: string;
  items: Event[];
}

export interface Event {
  resourceURI: string;
  name: string;
}
