import React from "react";
import AdminForm from "./components/sections/AdminForm";
import ProductTable from "./components/sections/ProductTable";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
      <AdminForm />
      <ProductTable />
    </Layout>
  );
};

export default App;
