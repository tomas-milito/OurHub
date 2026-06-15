import type { GetStaticPaths, GetStaticProps } from "next";
import WingPage from "../../src/components/Library/WingPage";
import { getWing, libraryWings } from "../../src/data/libraryData";

type PageProps = {
  wing: any;
};

export default function WingRoute({ wing }: PageProps) {
  return <WingPage wing={wing} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: libraryWings.map((wing: any) => ({ params: { wingId: wing.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const wing = getWing(String(params?.wingId));

  return {
    props: {
      wing,
    },
  };
};
