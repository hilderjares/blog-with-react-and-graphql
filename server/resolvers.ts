import { PrismaClient } from "@prisma/client"
import { hash, compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

const prisma = new PrismaClient()

const APP_SECRET = "sid666"

const resolvers = {
    Query: {
        users: () => prisma.user.findMany(),

        user: (_, { email }) =>
            prisma.user.findOne({
                where: {
                    email: email,
                },
            }),

        userPosts: (_, { email }) =>
            prisma.user
                .findOne({
                    where: {
                        email: email,
                    },
                })
                .posts(),

        posts: () => prisma.post.findMany(),

        feed: () =>
            prisma.post.findMany({
                where: {
                    published: true,
                },
                include: {
                    author: {},
                    category: {},
                },
            }),
    },

    Mutation: {
        createUser: async (_, { name, email, password }) => {
            const hashedPassword = await hash(password, 10)

            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: hashedPassword,
                },
            })

            return {
                token: sign({ userId: newUser.id }, APP_SECRET),
                user: newUser,
            }
        },

        login: async (_, { email, password }) => {
            const user = await prisma.user.findOne({
                where: {
                    email: email,
                },
            })

            if (!user) {
                throw new Error(`No user found for email: ${email}`)
            }

            const passwordValid = await compare(password, user.password)

            if (!passwordValid) {
                throw new Error("Invalid password")
            }

            return {
                token: sign({ userId: user.id }, APP_SECRET),
                user,
            }
        },

        createPost: (_, { title, content, email, plubished, category }) =>
            prisma.post.create({
                data: {
                    title: title,
                    content: content,
                    published: plubished,
                    category: {
                        connect: {
                            name: category,
                        },
                    },
                    author: {
                        connect: {
                            email: email,
                        },
                    },
                },
            }),
    },
}

export default resolvers
