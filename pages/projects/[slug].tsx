import React from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { fetchGraphQL } from "../../lib/api";

const Project: GetStaticProps = ({ params }) => {
  console.log({ params });
  return <div>{params?.slug}</div>;
};

export default Project;

export async function getStaticPaths() {
  const allProjectsData = await fetchGraphQL(/* GraphQL */ `
    query {
      projectsCollection {
        items {
          title
        }
      }
    }
  `);

  const projectsList = allProjectsData.data.projectsCollection.items;

  const makeSlug = (string: string): string =>
    string.replaceAll(" ", "-").toLowerCase();

  console.log(projectsList.map((p: { title: string }) => makeSlug(p.title)));
  return {
    paths: projectsList.map(
      (p: { title: string }) => `/projects/${makeSlug(p.title)}`
    ),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};
