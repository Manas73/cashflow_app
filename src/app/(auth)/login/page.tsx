'use client';

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
})

const LoginPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <>
            <h1 className={'title'}>Login</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={"container w-1/2 space-y-4"}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="your-email@example.com" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="password" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                    <div className={"flex justify-between items-center gap-4"}>
                        <Button type="submit">Login</Button>
                        <Link href="/register">Create an account</Link>
                    </div>
                </form>
            </Form>
        </>
    )
};

export default LoginPage;