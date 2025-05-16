"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { addUserNote, updateUserNote } from "@/utils/action/user.action";

interface Props {
  userId: string;
  title: string;
  content: string;
  noteId: string;
}

function UpdateNote({ userId, title, content, noteId }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { organization } = useOrganization();

  const NoteSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
  });
  const form = useForm<z.infer<typeof NoteSchema>>({
    resolver: zodResolver(NoteSchema),
    defaultValues: {
      title: title,
      content: content,
    },
  });

  const onSubmit = async (values: z.infer<typeof NoteSchema>) => {
    await updateUserNote({
      noteId,
      userId: userId,
      title: values.title,
      content: values.content,
    });
    router.push("/note");
  };

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    const { isSubmitting } = form.formState; // Get form's submitting state

    return (
      <Button
        type="submit"
        disabled={isSubmitting || pending} // Use both states
        className="text-[#111111] cursor-pointer btn-accent bg-[#eeeeee] hover:bg-[#5e8ad1]"
      >
        {isSubmitting || pending ? "Updating..." : "Edit Note"}
      </Button>
    );
  };

  return (
    <Form {...form}>
      <form
        className="my-10 w-[80%] flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Title
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Content
              </FormLabel>
              <FormControl className="no-focus border text-light-1">
                <Textarea rows={15} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}

export default UpdateNote;
