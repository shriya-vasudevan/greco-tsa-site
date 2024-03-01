import { inter } from '@/app/ui/fonts';

export default function Title ({ title } : { title: string }) {
    return (
        <>
            <h1 className="stroke-text tracking-widest">{title}</h1>
            <h1 className="text-8xl tracking-widest font-extrabold">{title}</h1>
        </>
    );
};
