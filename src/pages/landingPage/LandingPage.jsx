import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <main className="w-screen h-screen landingpage flex justify-around items-center  md:flex-col-reverse md:pt-6">
      <div className="md:flex hidden items-end justify-end md:items-center md:justify-center border-2 md:mb-4">
        <a
          href=""
          className="btn text-xl lg:text-lg md:text-xl rounded-lg p-4 px-16 md:px-8 text-white font-bold"
        >
          🎉 Create my event
        </a>
      </div>
      <section className="h-screen flex justify-center items-center md:items-start md:mt-8 md:h-2/4">
        <img
          className="drop-shadow-2xl h-4/5 md:h-4/4 "
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T113223Z&X-Amz-Expires=86400&X-Amz-Signature=07f6c4f06a461d4d416ac6a08ae9a4520cc8ce6c0a9bb53fc6192a3e74221bbb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          alt="event-img"
        />
      </section>
      <section className="md:pt-12">
        <div className="flex flex-col text-6xl lg:text-5xl md:text-4xl sm:text-2xl font-bold justify-end items-end md:items-center">
          <span className="text-color">Imagine if</span>
          <span className="gradient">Snapchat</span>
          <span className="text-color">had events.</span>
        </div>
        <div className="text-2xl text-right font-light lg:text-xl md:text-center">
          <p className="font-light">
            Easily host and share events with your friends
          </p>
          <p> across any social media.</p>
        </div>
        <div className="mt-12 md:mt-10 md:hidden flex items-end justify-end md:items-center md:justify-center">
          <Link
            to="/create"
            className="btn text-xl lg:text-lg md:text-xl rounded-lg p-4 px-16 md:px-8 text-white font-bold"
          >
            🎉 Create my event
          </Link>
        </div>
      </section>
    </main>
  );
};

export { LandingPage };
