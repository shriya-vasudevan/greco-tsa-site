"use server"

import "dotenv/config";
import Image from "next/image";

async function news (): Promise<any> {
    const req = await fetch(`https://newsapi.org/v2/everything?q='green energy'&apiKey=${process.env.NEWS_API_KEY}`);
    const resp = await req.json();
    return resp;
};

news().then(resp => {
    resp.articles.map((i: { [key: string]: string; }) => {
        // console.log(i.title);
        console.log(typeof(i.urlToImage));
        console.log(i.urlToImage);
    });
});

// line 30 --> <Image href={i.urlToImage} width={42.5} height={42.5} />

export default async function News () {
    const data = await news();

    return (
        <>
            <h1>Latest News</h1>
             <div>
                {data.articles.map((i: { [key: string]: string; }) => {
                    return (
                        <div>
                            <img src={i.urlToImage} width="42.5%"></img>
                            <h2>{i.title}</h2>
                            <p>{i.publishedAt}</p>
                            <p>{i.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
