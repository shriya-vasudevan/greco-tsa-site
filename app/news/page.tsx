"use client"

import "dotenv/config";

import { Card, CardHeader, CardBody } from "@material-tailwind/react";

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
                        if (i.urlToImage && i.urlToImage != "https://cdn.vox-cdn.com/thumbor/h5kNb06_KICKtrH3Z6uuDM5gxG4=/0x0:4000x2656/1200x628/filters:focal(2000x1328:2001x1329)/cdn.vox-cdn.com/uploads/chorus_asset/file/25283603/566448831.jpg" && i.urlToImage != "https://i.abcnewsfe.com/a/3be4cffc-d6ea-47eb-90c8-cbc0d6b31c11/wirestory_a3d63c87a6f59a66f7f103f325214f64_16x9.jpg?w=1600") {
                            return (   
                                <a href={i.url}>
                                    <Card placeholder="">
                                        <CardHeader 
                                            placeholder=""
                                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                                            style={{ backgroundImage : `url(${i.urlToImage})` }}
                                        >
                                            <div className="to-bg-black-50 absolute inset-0 h-full w-full bg-gradient-to-t from-black-50/80 via-black-50/50"></div>
                                        </CardHeader>
                                        <CardBody placeholder="" className="relative py-14 px-6 md:px-12">
                                            <h1>{i.title}</h1>
                                            <p>{i.publishedAt}</p>
                                            <p>{i.description}</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            );
                        }
                })) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

