
import HeaderSticky from "../components/homePageComp/HeaderSticky";
import PublicCard from "../components/homePageComp/PublicCard";
import PublicInput from "../components/homePageComp/PublicInput";

export const HomePage = () => {
  return (
    <div className="flex bg-amber-100  dark:bg-bg-dark">
      <section className="grid grid-cols-1 w-full sm:grid-cols-[minmax(300px,1fr)_300px]">
        <article className="flex flex-col min-w-full p-2 h-screen w-full overflow-hidden border-b-4 border-t-0">
          <HeaderSticky />
            <PublicInput />
            <PublicCard />  
        </article>
        <aside>placeholder derecho</aside>
      </section>
    </div>
  );
};
