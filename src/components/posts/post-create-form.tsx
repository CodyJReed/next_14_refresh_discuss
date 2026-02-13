"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  Button,
  Textarea,
} from "@nextui-org/react";
import { useActionState } from "react";

import * as actions from "@/actions";
import FormButton from "../common/form-button";

interface ComponentProps {
  slug: string;
}

export default function PostCreateForm({ slug }: ComponentProps) {
  const [formState, action, isPending] = useActionState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    },
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action} noValidate>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />

            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content of post"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />

            {Array.isArray(formState.errors._form) && (
              <div className="p-2 bg-red-200 border border-red-400 text-red-600 rounded-lg">
                {formState.errors._form.join(", ")}
              </div>
            )}
            <FormButton isLoading={isPending}>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
