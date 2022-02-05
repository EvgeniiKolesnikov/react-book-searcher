export interface IBook {
  author_name?: string[];
  cover_edition_key: string;
  cover_i?: number;
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  first_publish_year: number;
  has_fulltext: boolean;
  isbn?: string[];
  key: string;
  last_modified_i: number;
  language: string[];
  publish_date: string[];
  publish_place: string[];
  publish_year: number[];
  publisher: string[];
  publisher_facet: string[];
  seed: string[];
  subtitle: string;
  text: string[];
  title: string;
  title_suggest: string;
  type: string;
}

export interface IBooksData {
  docs: IBook[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: null;
  q: string;
  start: number;
  totalPages: number;
}
export interface IBookCard {
  book: IBook;
}