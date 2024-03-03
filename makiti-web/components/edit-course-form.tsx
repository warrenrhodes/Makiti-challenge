"use client";
import { Button } from "@/components/ui/button";
import { Course } from "@/lib/models/course";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";
import { postRequest } from "@/app/database/https";
import { useRouter } from "next/navigation";

export const EditCourse = (props: { course: Course }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const formSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: "The name must be at least 2 characters.",
      })
      .trim(),
    description: z
      .string()
      .min(1, {
        message: "The description must not be empty.",
      })
      .trim(),
    isAvailable: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.course.name,
      description: props.course.description,
      isAvailable: props.course.isAvailable,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const body = {
      ...props.course,
      name: values.name,
      description: values.description,
      isAvailable: values.isAvailable,
    };
    const result = await postRequest({
      route: `/api/update-course?course-id=${props.course.id}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status !== 200) {
      return;
    }
    router.refresh();
    setOpen(false);
  }
  return (
    <AlertDialog open={open} onOpenChange={(open) => form.reset()}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Edit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Course?</AlertDialogTitle>
          <AlertDialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isAvailable"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="airplane-mode"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="airplane-mode">IsAvailable</Label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setOpen(false)}>
                    Cancel
                  </AlertDialogCancel>
                  <Button type="submit">Continue</Button>
                </AlertDialogFooter>
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
