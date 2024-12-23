import Link from "../router/Link.tsx";
import SectionTitle from "../components/SectionTitle.tsx";

const Home = function () {
  return (
    <div
      className={"mx-auto flex flex-col items-center pt-6 text-center sm:gap-5"}
    >
      <SectionTitle>So, you want to travel to</SectionTitle>
      <h1
        className={
          "mt-1.5 font-bellefair text-[4.7rem] uppercase tracking-wider text-white sm:text-9xl"
        }
      >
        Space
      </h1>
      <p
        className={
          "mt-2.5 text-[0.95rem] font-light leading-[1.56rem] sm:text-lg"
        }
      >
        Let’s face it; if you want to go to space, you might as well genuinely
        to outer space and not hover kind of on the edge of it. Well sit back,
        and relax because we’ll give you a truly out of this world experience!
      </p>

      <Link
        className={
          "sm:text mt-20 flex size-40 items-center justify-center rounded-full bg-white font-bellefair text-2xl uppercase text-black sm:size-60 sm:text-4xl"
        }
        to={"/destination"}
      >
        Explore
      </Link>
    </div>
  );
};

export default Home;
