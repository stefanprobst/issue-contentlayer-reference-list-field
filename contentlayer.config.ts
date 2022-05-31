import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Person = defineDocumentType(() => {
  return {
    name: "Person",
    contentType: "data",
    filePathPattern: "persons/**/*.yml",
    fields: {
      name: {
        type: "string",
        required: true,
      },
    },
  };
});

// @ts-expect-error
const Post = defineDocumentType(() => {
  return {
    name: "Post",
    contentType: "mdx",
    filePathPattern: "posts/**/*.mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      /**
       * Unclear how to create a "list of references" field.
       */
      authors: {
        type: "list",
        of: { type: "reference", of: Person },
        // of: { type: 'string' },
        required: true,
      },
    },
  };
});

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Person, Post],
});
