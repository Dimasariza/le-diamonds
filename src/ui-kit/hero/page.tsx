import { Card, CardBody, Typography } from '@material-tailwind/react'

export default function Hero() {
    return (
        <Card shadow={false}> 
            <CardBody 
                style={{
                    background: "url('/assets/image/Banner 1.png') no-repeat center center",
                    backgroundSize: "cover",
                    WebkitBackgroundSize: "conver",
                    MozBackgroundSize: "cover",
                    OBackgroundSize: "cover",
                    height: "40rem"
                }}
                className=" rounded-none w-full"
            >
                <div className='container'>
                    <Typography
                    variant="h2"
                    color="white"
                    className="mb-6 font-medium leading-[1.5]"
                    >
                        How we design and code open-source projects?
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Tania Andrew
                    </Typography>
                </div>
            </CardBody>
        </Card>
    )
}