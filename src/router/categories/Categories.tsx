import { useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";

const Categories = () => {
  const location = useLocation();
  const subPath = location.pathname.split("/");
  console.log(subPath);
  return (
    <Layout>
      <div>Categories</div>
    </Layout>
  );
};

export default Categories;
