import { Typography } from "@material-tailwind/react";

export default function Detail() {
    return (
        <section className="flex container justify-center gap-4 p-5">
            <div>
                <Typography as={"h1"} variant="h1"> 
                    Luxury Defined By Style, Not Price.
                </Typography>

                <Typography>
                    Moissanites are lab-grown gemstones, crafted by the most skilled hands to create a sparkle that is a class of its own.
                </Typography>
                <br />

                <Typography>
                    Every piece of moissanite comes with a certification as a testament to its quality. This gemstone is also durable, second only to diamonds in terms of hardness.
                    Hence, your fine jewellery pieces from Le Diamonds cannot be easily scratched and keep their fire well. Due to its hardness, we are also able to create dazzling cuts that will shine brightly on you.
                </Typography>
                <br />

                <Typography>
                    Our attention to quality and detail ensures that all our moissanite jewellery is a work of art that you can be proud to wear.
                </Typography>
            </div>

            <img
                width={400}
                className=" object-cover object-center"
                src="/assets/image/image 29.png"
                alt="nature image"
            />
        </section>
    )
}