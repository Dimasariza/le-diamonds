import { Button, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from "@material-tailwind/react";

export default function BestSeller() {
    return (
        <section className="flex container">
            <Card
            style={{width: "50%"}}
            className="flex w-40  rounded-none  items-end justify-center overflow-hidden  bg-black"
                >
                <CardBody 
                    style={{
                        background: "url('/assets/image/Rectangle 889.png')",
                        backgroundSize: "cover",
                        WebkitBackgroundSize: "conver",
                        MozBackgroundSize: "cover",
                        OBackgroundSize: "cover",
                        width: "100%",
                        height: "100%"
                    }}
                    className="flex items-center rounded-none bg-black"
                >
                    <div>
                        <Typography
                        variant="h2"
                        color="black"
                        className="mb-6 font-medium leading-[1.5]"
                        >
                            Our Best Selling Products
                        </Typography>
                        <Button>
                            SHOP COLLECTION
                        </Button>
                    </div>
                </CardBody>
            </Card>

            {
                [
                    {
                        image: "rings-removebg-preview",
                        name: "STÉPHANE",
                        price: "$866.00 - $994.00"
                    },
                    {
                        image: "earrings-removebg-preview",
                        name: "ANDRÉE",
                        price: "$943.00 - $1,186.00"
                    },
                    {
                        image: "rings-removebg-preview",
                        name: "STÉPHANE",
                        price: "$866.00 - $994.00"
                    },
                    {
                        image: "earrings-removebg-preview",
                        name: "ANDRÉE",
                        price: "$943.00 - $1,186.00"
                    },
                    {
                        image: "rings-removebg-preview",
                        name: "STÉPHANE",
                        price: "$866.00 - $994.00"
                    },
                    {
                        image: "earrings-removebg-preview",
                        name: "ANDRÉE",
                        price: "$943.00 - $1,186.00"
                    },
                    {
                        image: "rings-removebg-preview",
                        name: "STÉPHANE",
                        price: "$866.00 - $994.00"
                    },
                    {
                        image: "earrings-removebg-preview",
                        name: "ANDRÉE",
                        price: "$943.00 - $1,186.00"
                    },
                ].map(({image, name, price}: any, key: number) => (
                    <Card
                    shadow={false}
                    key={name + key}
                    className={"flex rounded-none  items-end overflow-hidden col-6 text-center bg-red-200"}
                        >
                        <CardBody 
                            className={"rounded-none items-center justify-center"}
                        >
                            <img
                                src={`/assets/image/${image + ".png"}`}
                                alt="card-image"
                                width={300}
                                height={300}
                            />
                            <div>
                                <Typography
                                color="black"
                                className="mb-6 font-medium leading-[1.5]"
                                >
                                    {name}
                                </Typography>

                                <Typography
                                color="black"
                                className="mb-6 font-medium leading-[1.5]"
                                >
                                    {price}
                                </Typography>
                            </div>
                        </CardBody>
                    </Card>
                ))
            }

        </section>
    )
}