import { Card, CardBody, CardFooter, CardHeader, Carousel, Typography } from "@material-tailwind/react";

export default function ContactUs() {
    return (
        <section className="p-5">
            <div className="container">
                <Typography as="h1">Recent Blogs</Typography>

                <div className="flex gap-4">
                    <Carousel 
                    style={{height: "18rem"}}
                    prevArrow={()=>{}}
                    nextArrow={()=>{}}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-6">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-4 h-2 bg-black" : "w-2 h-2 bg-black/30"
                            }`}
                            onClick={() => setActiveIndex(i)}
                            />
                        ))}
                        </div>
                    )}
                    >
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
                            ].map((props: any, key: number) => (
                                <div className="flex gap-3 mb-1" key={props.name + key}>
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
                                            </Card>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
    
}