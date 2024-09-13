"use client";
import { BLUR_FADE_DELAY } from "@/lib/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BlurFade from "./magicui/blur-fade";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const formSchema = z.object({
    user_name: z.string().min(1, { message: "Name is required" }),
    user_email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE!,
        values,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC!
      )
      .then((res) => {
        console.log(res);
        toast({
          title: "Email sent!",
          description:
            "Thank you for reaching out! I will get back to you soon.",
        });
        console.log("EMAIL SENT");
        alert(
          "Email sent! Thank you for reaching out! I will get back to you soon."
        );
      })
      .catch((err) => {
        toast({
          title: "Error",
          description:
            "Email failed to send. Please try again later or contact me directly: jvariara@gmail.com.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="contact">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                Contact Me
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Shoot me an email and I'll respond whenever I can.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Form */}
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 border p-4 rounded-lg bg-card shadow-lg"
              ref={formRef}
            >
              <div className="flex flex-1 w-full gap-x-4">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="user_name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Adams" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="user_email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        rows={4}
                        placeholder="Write your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="gap-1.5 items-center">
                Send <Send className="size-4" />
              </Button>
            </form>
          </Form>
        </BlurFade>
      </div>
    </section>
  );
};

export default Contact;
