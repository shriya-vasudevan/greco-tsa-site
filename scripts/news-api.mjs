import "dotenv/config";

async function news () {
    const req = await fetch(`https://newsapi.org/v2/everything?q='green energy'&apiKey=${process.env.NEWS_API_KEY}`);
    const resp = await req.json();
    return resp;
};

const arr = [];

news().then(resp => {
    resp.articles.map((i) => {
        arr.push(i.title);
        // console.log(arr.length, arr);
        // console.log(i.title);
    });
    // console.log(arr);
});

console.log(arr);

export const TITLES = arr;
// export const TITLE = i.title;
