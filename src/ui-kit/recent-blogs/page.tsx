import { Avatar, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from "@material-tailwind/react"

export default function RecentBlogs() {
    return (
        <section className="bg-gray-100 p-5">
            <div className="container">
                <Typography as="h1">Recent Blogs</Typography>

                <div className="flex gap-4">
                    {
                        [
                            {
                                name: ""
                            },
                            {
                                name: ""
                            },
                            {
                                name: ""
                            },
                            {
                                name: ""
                            },
                        ].map(({name}: any, key: number) => (

                            <Card className="rounded-none" key={name+key} style={{width: "30rem"}}>
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="m-0 rounded-none"
                                >
                                    <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                    alt="ui/ux review check"
                                    />
                                </CardHeader>
                                <div className="relative">
                                    <Typography color="white" className="absolute bottom-2 right-0 bg-black p-2" style={{bottom: "-18px"}}>
                                        MOISSANITE
                                    </Typography>
                                </div>
                                <CardBody>
                                    <Typography variant="h4" color="blue-gray">
                                        CAN MOISSANITE BE YOUR NEXT'SUPERSTAR' JEWELRY STONE?
                                    </Typography>
                                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                        In a world where diamonds are the traditional choice most especially when buying an engagement ring..
                                    </Typography>
                                </CardBody>
                                <CardFooter className=" items-center justify-between">
                                    <div className="w-full border"></div>
                                    <Typography className="font-normal">May 25, 2022 | By Admin</Typography>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}