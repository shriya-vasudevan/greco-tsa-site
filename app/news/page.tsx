"use server"

import "dotenv/config";
import Link from "next/link";

async function news (): Promise<any> {
    const req = await fetch(`https://newsapi.org/v2/everything?q='green energy'&apiKey=${process.env.NEWS_API_KEY}`);
    const resp = await req.json();
    return resp;
};

/* news().then(resp => {
    resp.articles.map((i: { [key: string]: string; }) => {
        console.log(typeof(i.urlToImage));
        console.log(i.urlToImage);
    });
}); */

export default async function News () {
    const data = await news();

    return (
        <>
            <h1>Latest News</h1>
             <div className="">
                {data.articles.map((i: { [key: string]: string; }) => {
                    return (
                        <div>
                            <a href={i.url}>
                                <img src={i.urlToImage}></img>
                                <h2>{i.title}</h2>
                                <p>{i.publishedAt}</p>
                                <p>{i.description}</p>
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
