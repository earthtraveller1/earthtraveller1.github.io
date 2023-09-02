import fs from "fs"
import React from "react"
import Image from "next/image"

export default function Home() {
    const images = fs.readdirSync("public/images")

    return <main>
        <h1 className="text-center text-4xl m-4">EarthTraveller1</h1>
        <p className="text-center text-md m-2">Yes, Indeed!</p>

        <div className="flex justify-between p-16">
            {images.map((image, _index, _array) => {
                const size = 400
                return <Image src={`/images/${image}`} alt={`image/${image}`} key={null} width={size} height={size} />
            })}
        </div>
    </main>
}
