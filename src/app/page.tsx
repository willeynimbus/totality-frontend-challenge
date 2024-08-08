import Main from "@/components/Main/Main";
import Product from "@/components/Product/Product";
import Review from "@/components/Review/Review";

export default function Home() {
  return (
    <main className="w-full">
      <Main />
      <Product />
      <Review />
    </main>
  );
}
