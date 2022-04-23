import { FC } from "react";
import BlogLayout from "../../components/BlogLayout";

const Content: FC = () => {
  return <div>Hello their</div>;
};

const Page: FC = () => {
  return (
    <BlogLayout>
      <Content />
    </BlogLayout>
  );
};

export default Page;
