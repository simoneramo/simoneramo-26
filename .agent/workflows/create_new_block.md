---
description: Create a new block component for the block-based page template
---
1. **Create the Astro Component**
   - Create a new file `src/components/blocks/[BlockName].astro`.
   - Define the props interface for the block's data.
   - Implement the HTML structure and styling (Tailwind CSS recommended).
   - Ensure it exports the necessary interface if you want strict typing elsewhere (optional but good practice).

2. **Update Content Collection Schema**
   - Open `src/content/config.ts`.
   - Locate the `pages` collection schema.
   - Add a new object to the `blocks` union array:

     ```typescript
     z.object({
         _template: z.literal('[block-name]'), // Must match the name used in Tina
         // Add schema fields matching your component props
         // e.g., title: z.string(),
     })
     ```

   - *Note: Ensure you use `_template` as the discriminator.*

3. **Update TinaCMS Configuration**
   - Open `tina/config.ts`.
   - Locate the `pages` collection in the `schema`.
   - Add a new template object to the `blocks` field's `templates` array:

     ```typescript
     {
         name: '[block-name]', // Must match the _template literal above
         label: '[Block Label]',
         fields: [
             // Define fields that map to your schema
             // e.g., { type: "string", name: "title", label: "Title" }
         ],
     }
     ```

4. **Register Component in Page Template**
   - Open `src/pages/[slug].astro`.
   - Import your new component at the top:
     `import [BlockName] from "../components/blocks/[BlockName].astro";`
   - Add a new case to the switch statement:

     ```jsx
     case "[block-name]":
         return <[BlockName] {...block} />;
     ```

5. **Verify and Test**
   - Run `npx astro sync` to update content types.
   - Run `npm run dev` (or `npx tinacms dev -c "astro dev"`).
   - Go to the Tina Admin (`/admin`), edit a page, add your new block, and save.
   - Verify it renders correctly on the frontend.
