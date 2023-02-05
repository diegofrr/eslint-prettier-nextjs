import Head from "next/head";

import Header from "~/components/Header";

import { Container, Content } from "../home/styles";

export default function Theme() {
  return (
    <>
      <Head>
        <title>Tema</title>
      </Head>
      <Header />
      <Container>
        <Content>Página do tema</Content>
      </Container>
    </>
  );
}
