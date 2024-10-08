import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function AdvantageCard({image, title, caption}: any) {
    return (
        <Card className="w-80 hover:drop-shadow-xl" shadow={false}>
            <CardBody className="mx-0 flex items-center gap-4 pt-0 pb-8">
                <Image width={40} height={40} src={`/assets/image/${image}`} alt="" />
                <div>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography>
                        {caption}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    )
}