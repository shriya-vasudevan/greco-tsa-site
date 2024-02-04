import Image from "next/image";

type props = {
    title: string;
    icon?: string;
    color: string;
};

const Button = ({ title, icon, color }: props) => {
    return (
        <button className={``}>
            {icon && <Image src={icon} alt={title} width={30} height={30}/>}
        </button>
    );
};
