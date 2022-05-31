# Issue: Create a "list of references" field type in `contentlayer`

x-ref: https://github.com/contentlayerdev/contentlayer/issues/237

## How to reproduce

```bash
npm run generate
```

This will throw with:

```
Error: A case was not handled for value: {"type":"reference","of":{"type":"document"}}
```

Also, typescript already warns that this is invalid, hence the `@ts-expect-error` in `contentlayer.config.ts`.