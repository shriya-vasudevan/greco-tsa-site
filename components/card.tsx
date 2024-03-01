import {
    Card,
    CardHeader,
    CardBody
  } from "@material-tailwind/react";

export default function NewsCard ({ url, image, title, published, description } : { url: string, image: string, title: string, published: string, description: string }) {
    return (
        <>
            <a href={url}>
                <Card placeholder="">
                    <CardHeader 
                        placeholder=""
                        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(${image})] bg-cover bg-center`}
                    >
                        <div className="to-bg-black-50 absolute inset-0 h-full w-full bg-gradient-to-t from-black-50/80 via-black-50/50"></div>
                    </CardHeader>
                    <CardBody placeholder="">
                        <h1>{title}</h1>
                        <p>{published}</p>
                        <p>{description}</p>
                    </CardBody>
                </Card>
            </a>
        </>
    );
};


                            {/* <NewsCard url={i.url} image={i.urlToImage} title={i.title} published={i.publishedAt} description={i.description} /> */}

{/* <div key={i.title}> */ }    
                                {/* <Card placeholder=""> */}     
                                    {/* <a href={i.url}>
                                        <img src={i.urlToImage} alt={i.description}></img>
                                        <h2>{i.title}</h2>
                                        <p>{i.publishedAt}</p>
                                        <p>{i.description}</p>
                                    </a> */}
                                {/* </Card> */}
                            {/* </div> */}


