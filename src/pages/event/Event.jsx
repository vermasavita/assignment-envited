import { FinalEvent } from "./FinalEvent";

const Event = () => {
    return(
        <section className="finaleventColor h-screen w-screen flex justify-evenly items-center md:flex-col-reverse">
            <FinalEvent/>
            <img className="drop-shadow-2xl h-96 lg:h-60 cursor-pointer rounded-md"src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T133726Z&X-Amz-Expires=86400&X-Amz-Signature=8200fbf050ef45e500964bd7f00b094bc9434111fb4d8a42c4713c7d739f22a4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" alt="" />
        </section>
    )
}

export { Event };
