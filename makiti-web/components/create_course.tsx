"use client";
import { Button } from "@/components/ui/button";
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
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Lecturer, LecturerFieldKey } from "@/lib/models/lecturer";
import { Checkbox } from "./ui/checkbox";
import { postRequest } from "@/app/database/https";

export const CreateCourse = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lectures, setLectures] = useState<Lecturer[]>([]);

  const fetchLecturers = useCallback(async () => {
    const lecturersRetrieved: Lecturer[] = [];
    const response = await fetch(`http://localhost:3000/api/lecturers/`);
    const data = await response.json();

    setLectures(data);
  }, []);

  useEffect(() => {
    fetchLecturers();
  }, [fetchLecturers]);

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
    price: z.string().min(1),
    imageUrl: z.string().url({ message: "Invalid url" }),
    isAvailable: z.boolean(),
    lecturersId: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one lecturer.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0",
      lecturersId: [],
      imageUrl: "",
      isAvailable: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const body = JSON.stringify(values);
    const result = await postRequest({
      route: `/api/create-course`,
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
        <Button
          className="h-[60px] w-[60px] rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 p-8 text-wrap"
          onClick={() => setOpen(true)}
        >
          New Course
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Course</AlertDialogTitle>
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
                        <Input {...field} multiple />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image Url</FormLabel>
                      <FormControl>
                        <Input {...field} type="url" />
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
                <FormItem>
                  <FormLabel>Select Lecturers</FormLabel>
                  {lectures.map((lecturer) => {
                    return (
                      <FormField
                        key={lecturer.id}
                        control={form.control}
                        name="lecturersId"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={lecturer.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(lecturer.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          lecturer.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== lecturer.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {lecturer.name}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    );
                  })}
                </FormItem>
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
