import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function CTACard({width, image, bg, title, cardClass}: any) {
    return (
        <Card
        shadow={false}
        className={"flex rounded-none  items-end overflow-hidden col-6 " + cardClass}
            >
            <CardBody 
                style={{
                    background: `url('/assets/image/${bg}') no-repeat center center`,
                    backgroundSize: "cover",
                    WebkitBackgroundSize: "conver",
                    MozBackgroundSize: "cover",
                    OBackgroundSize: "cover",
                    height: "100%",
                }}
                className={"rounded-none w-full items-center justify-center " + `${width > 25 ? "flex" : ""}`}
            >
                <Image
                    className=""
                    src={`/assets/image/${image}`}
                    alt="card-image"
                        width={300}
                        height={300}
                />
                <div>
                    <Typography
                    color="black"
                    className="mb-6 font-medium leading-[1.5]"
                    >
                        {title}
                    </Typography>
                    <a href="" style={{textDecoration: "underline"}} color="black">
                        SHOP NOW
                    </a>
                </div>
            </CardBody>
        </Card>
    )
}