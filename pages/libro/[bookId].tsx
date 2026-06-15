import type { GetStaticPaths, GetStaticProps } from "next";
import BookPage from "../../src/components/Library/BookPage";
import { getBook, libraryWings } from "../../src/data/libraryData";

type PageProps = {
  book: any;
  section: any;
  wing: any;
};

export default function BookRoute({ book, section, wing }: PageProps) {
  return <BookPage book={book} section={section} wing={wing} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = libraryWings.flatMap((wing: any) =>
    wing.sections.flatMap((section: any) =>
      section.books.map((book: any) => ({ params: { bookId: book.id } }))
    )
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const { book, section, wing } = getBook(String(params?.bookId));

  return {
    props: {
      book,
      section,
      wing,
    },
  };
};
