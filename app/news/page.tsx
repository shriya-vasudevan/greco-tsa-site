"use server"

import "dotenv/config";
// import NewsCard from "@/components/card";

/* import {
    Card,
    CardHeader,
    CardBody
  } from "@material-tailwind/react"; */

async function news () {
    const req = await fetch(`https://newsapi.org/v2/everything?q='green energy'&apiKey=${process.env.NEWS_API_KEY}`);
    const resp = await req.json();
    return resp;
}; 

export default async function News () {
    const data = await news();
 
    return (
        <>
            <h1>Latest News</h1>
            <div className="">
                {data.articles ? (
                    data.articles.map((i: { title: string, url: string, urlToImage: string, description: string, publishedAt: string }) => {
                        return (   
                            <div className="">
                                <a href={i.url}>
                                    <img src={i.urlToImage} alt={i.description}></img>
                                    <h2>{i.title}</h2>
                                    <p>{i.publishedAt}</p>
                                    <p>{i.description}</p>
                                </a>
                            </div>  
                        );
                })) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

                            {/* <NewsCard url={i.url} image={i?.urlToImage} title={i.title} published={i.publishedAt} description={i.description} /> */}

{/* <NewsCard url={i.url} image={i?.urlToImage} title={i.title} published={i.publishedAt} description={i.description} /> */ }
{/* <>
                                <a href={i.url}>
                                    <Card placeholder="">
                                        <CardHeader 
                                            placeholder=""
                                            className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(${i.urlToImage})] bg-cover bg-center`}
                                        >
                                            <div className="to-bg-black-50 absolute inset-0 h-full w-full bg-gradient-to-t from-black-50/80 via-black-50/50"></div>
                                        </CardHeader>
                                        <CardBody placeholder="">
                                            <h1>{i.title}</h1>
                                            <p>{i.publishedAt}</p>
                                            <p>{i.description}</p>
                                        </CardBody>
                                    </Card>
                                </a>
                        </> */}

