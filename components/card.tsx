"use client"

import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";

export default function NewsCard ({ url, image, title, published, description } : { url: string, image: string, title: string, published: string, description: string }) {
    return (
        <>
            <a href={url}>
                <Card placeholder="" className="h-96 m-6 ">
                    <CardHeader 
                        placeholder=""
                        className="absolute inset-0 m-0 h-full w-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage : `url(${image})` }}
                    >
                        <div className="to-bg-black-50 absolute inset-0 h-full w-full bg-gradient-to-t from-black-50/100 via-black-50/50"></div>
                    </CardHeader>
                    <CardBody placeholder="" className="relative top-56 px-6 md:px-4 w-full">
                        <h1 className="text-lg font-medium">{title}</h1>
                        <p className="text-base text-green-50">{published}</p>
                        <p className="line-clamp-2">{description}</p>
                    </CardBody>
                </Card>
            </a>
        </>
    );
};
