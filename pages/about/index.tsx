import { useState, useEffect } from "react";

import type { NextPage } from "next";

import Layout from "@components/Layout";

const About: NextPage = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/hello")
        .then((response) => response.json())
        .then((res) => {
          setName(res.name);
        });
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <h2>About us</h2>
      <p>This is a About page.</p>
      <p>Just test Merge request</p>

      <br />

      <section>
        <h3>This data is from Next.js API:</h3>
        <h2> {name}</h2>
      </section>
    </Layout>
  );
};

export default About;
