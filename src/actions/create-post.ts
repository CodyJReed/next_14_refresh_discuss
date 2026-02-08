"use server";

interface CreatePostFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createPost() {
  return {
    errors: {},
  };
  // revalidate the topic show page
}
