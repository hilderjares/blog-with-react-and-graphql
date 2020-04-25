//
// THIS FILES IS JUST MUNUALLY TESTS ;)
//

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const getUser = (email: string) =>
        prisma.user.findOne({
            where: {
                email: email,
            },
        })

    const allUsers = await prisma.user.findMany()

    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "test02",
    //         email: "test02@gmail.com",
    //     }
    // })
    //
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "test",
    //         content: "",
    //         author: {
    //             connect: {
    //                 email: createUser.email
    //             }
    //         },
    //         published: false
    //     }
    // })

    // Promise.resolve(getUser("test02@gmail.com")).then(function (value) {
    //     console.log(value);
    // }, function (value) {
    // });

    const publishedPosts = await prisma.post.findMany({
        where: {
            published: true,
        },
        include: {
            author: {},
            category: {},
        },
    })

    console.log(publishedPosts)

    // console.log(createUser)
    // console.log(createPost)
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
